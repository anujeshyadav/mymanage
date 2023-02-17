const fs = require("fs");
const path = require("path");
const { Kanban } = require("../models/index/index");
const { Board } = require("../models/index/index");
const GoogleCloudStorage = require("../Utilities/googleCloudStorage");
const { body } = require("express-validator");

const changeIndex = (arr, fromIndex, toIndex) => {
  const element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
};

exports.newTaskKanban = async (req, res) => {
  try {
    const bodyData = req.body;
    var query = Kanban.find({ isDelete: false });
    query.countDocuments(function (err, count) {
      if (err) {
        return res.status(500).json({
          errors: { common: { msg: err.message } },
        });
      }
      bodyData.id = count + 1;
      const newKanban = new Kanban(bodyData);
      // eslint-disable-next-line no-unused-vars
      newKanban.save((err, success) => {
        if (err) {
          return res.status(500).json({
            errors: { common: { msg: err.message } },
          });
        }
        return res.status(201).json({
          success: "New Kanban created successfull",
        });
      });
    });
  } catch (err) {
    return res.status(500).json({
      errors: { common: { msg: err.message } },
    });
  }
};

exports.getTaskKanban = async (req, res) => {
  try {
    Kanban.find({
      isDelete: false,
    })
      .populate("boardId")
      .exec((err, kanbanData) => {
        let data = [];
        if (kanbanData.length > 0) {
          data = kanbanData.map((task) => {
            let taskString = JSON.stringify(task);
            let newTask = JSON.parse(taskString);
            newTask.boardId = task.boardId.id;
            return newTask;
          });
          // kanbanData.sort((a, b) => {
          //   return parseInt(a.id) - parseInt(b.id);
          // });
        }
        return res.status(200).send(data);
      });
  } catch (err) {
    return res.status(500).json({
      errors: { common: { msg: err.message } },
    });
  }
};

exports.updateTaskKanban = async (req, res) => {
  try {
    let url;

    if (req.file) {
      url = await GoogleCloudStorage.upload(req.file);
    }

    const selectedTask = JSON.parse(req.body.selectedTask);
    const data = JSON.parse(req.body.data);

    const { dueDate, labels, description, assignedTo } = req.body;
    const { _id, id, boardId, attachments, comments } = selectedTask;
    const { title } = data;

    const kanbanList = await Kanban.find({ _id: _id });
    const boardList = await Board.find({ _id: boardId });

    const kanban = kanbanList[0];
    const newBoardId = boardList[0]._id;

    if (!kanban) {
      return res.status(404).json({
        errors: { common: { msg: "No kanban data found by id: ", _id } },
      });
    }

    var labelArray = [];
    labelArray = labels.split(",");

    kanban.id = id ? id : kanban.id;
    kanban.title = title ? title : kanban.title;
    kanban.labels = labels ? labelArray : kanban.labels;
    kanban.boardId = newBoardId ? newBoardId : kanban.boardId;
    kanban.description = description ? description : kanban.description;
    kanban.dueDate = dueDate ? dueDate : kanban.dueDate;
    kanban.attachments = attachments ? attachments : kanban.attachments;
    kanban.comments = comments ? comments : kanban.comments;
    kanban.assignedTo = assignedTo.length ? JSON.parse(assignedTo) : kanban.assignedTo;
    kanban.coverImage = url ? url : kanban.coverImage;

    await kanban.save();

    return res.status(200).json({
      success: "kanbanTask updated successful",
    });
  } catch (error) {
    return res.status(500).json({
      errors: { common: { msg: error } },
    });
  }
};

exports.updateTaskBoardId = async (req, res) => {
  try {
    const { taskId, newBoardId } = req.body;
    console.log(req.body);
    const kanbanList = await Kanban.find({ _id: taskId });
    const boardList = await Board.find({ _id: newBoardId });
    const kanban = kanbanList[0];
    const boardId = boardList[0]._id;
    if (!kanban) {
      return res.status(404).json({
        errors: { common: { msg: "No kanban data found by id: ", _id } },
      });
    }
    kanban.boardId = boardId ? boardId : kanban.boardId;
    await kanban.save();
    return res.status(200).json({
      success: "kanbanTask updated successful",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      errors: { common: { msg: error } },
    });
  }
};

exports.reorderTaskKanban = async (req, res) => {
  try {
    const { taskId, targetTaskId } = req.body;
    const KanbanData = await Kanban.find({ isDelete: false });
    const srcIndex = KanbanData.filter((x) => x._id.toString() === taskId);
    const targetIndex = KanbanData.filter((x) => x._id.toString() === targetTaskId);
    const srcIndexData = srcIndex[0];
    const targetIndexData = targetIndex[0];
    const srcIndexDataInt = parseInt(srcIndexData.id);
    const targetIndexDataInt = parseInt(targetIndexData.id);

    // Exchange the task id for the reorder option
    if (srcIndexDataInt > targetIndexDataInt) {
      for (let i = targetIndexDataInt; i < srcIndexDataInt; i++) {
        const momentKanban = KanbanData.filter((x) => x.id === i.toString());
        const momentKanbanData = momentKanban[0];
        const CorrectId = i + 1;
        momentKanbanData.id = CorrectId.toString();
        await momentKanbanData.save();
      }
    } else if (srcIndexDataInt < targetIndexDataInt) {
      for (let i = targetIndexDataInt; i > srcIndexDataInt; i--) {
        const momentKanban = KanbanData.filter((x) => x.id === i.toString());
        const momentKanbanData = momentKanban[0];
        const CorrectId = i - 1;
        momentKanbanData.id = CorrectId.toString();
        await momentKanbanData.save();
      }
    }
    srcIndexData.id = targetIndexDataInt.toString();
    await srcIndexData.save();
    return res.status(201).json({
      success: "The task kanban recorded successful",
    });
  } catch (err) {
    return res.status(500).json({
      errors: { common: { msg: err.message } },
    });
  }
};

// Clear the kanban tasks for the selected board by update the isDelete flag to true
exports.clearTasks = async (req, res) => {
  try {
    const { boardId } = req.params;
    const deleteByBoardId = await Kanban.updateMany(
      {
        boardId: boardId,
      },
      {
        isDelete: true,
      }
    );
    if (deleteByBoardId.modifiedCount >= 1) {
      return res.status(201).json({
        msg: "The task kanban cleared successfully",
        success: true,
      });
    }
    return res.send({ msg: "not cleared", success: false });
  } catch (err) {
    return res.status(500).json({
      errors: { common: { msg: err.message } },
    });
  }
};

exports.deleteTaskKanban = async (req, res) => {
  try {
    const { tasks } = req.body.source;

    deleteTasks = tasks.map(async (task) => {
      console.log(task);
      const updateRes = await Kanban.updateMany(
        {
          _id: task.id,
        },
        {
          isDelete: true,
        }
      );
      console.log(updateRes);
      return updateRes;
    });
    console.log(deleteTasks.filter((x) => x.modifiedCount > 0).length);
    return res.status(200).json({
      msg: {
        comment: "succcessfully deleted",
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      errors: { common: { msg: err.message } },
    });
  }
};
