const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const { EmployeeTask, EmployeeContact } = require("../models/index/index");

exports.createTask = asyncHandler(async (req, res) => {
  try {
    const payload = req.body;
    payload.userId = mongoose.Types.ObjectId(req.user._id);
    payload.status = "pending";
    const employeeTaskData = await EmployeeTask.create(payload);
    return res.status(201).send(employeeTaskData);
  } catch (error) {
    return res.status(400).send({ msg: error.message.replace(/"/g, ""), success: false });
  }
});

exports.getTaskByEmpRoleId = asyncHandler(async (req, res) => {
  try {
    if (req.user.user.employeeId === null) {
      return res
        .status(400)
        .json({ success: false, msg: "No employee id was set. Please contact your admin" });
    }
    const empDetails = await EmployeeContact.findOne({ _id: req.user.user.employeeId });
    const getTaskByEmpRoleId = await EmployeeTask.find({
      empRoleId: empDetails.role,
    });
    return res.status(200).send(getTaskByEmpRoleId);
  } catch (error) {
    return res.send({ success: false, message: error.message.replace(/"/g, "") });
  }
});

exports.getTaskByUserId = asyncHandler(async (req, res) => {
  try {
    const { _id } = req.user;
    const getTasks = await EmployeeTask.find({
      userId: mongoose.Types.ObjectId(_id),
    });
    return res.status(200).send(getTasks);
  } catch (error) {
    return res.send({ success: false, message: error.message.replace(/"/g, "") });
  }
});
