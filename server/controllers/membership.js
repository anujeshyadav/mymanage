const { Membership, Shop } = require("../models/index/index");
const { default: mongoose } = require("mongoose");

exports.create = async (req, res) => {
  const membershipDetails = req.body;
  const shopId = req.params.shopId;
  const userId = req.user._id;
  try {
    membershipDetails.userId = userId;
    const membershipObj = new Membership(membershipDetails);
    await membershipObj.save(async (err, data) => {
      if (err) {
        return res.send({ msg: err.message, success: false });
      } else if (data) {
        const result = await Shop.updateOne(
          {
            _id: mongoose.Types.ObjectId(shopId),
            userId: mongoose.Types.ObjectId(userId),
            shopCategory: "membership",
          },
          { $push: { memberships: data._id } }
        );
        if (result.modifiedCount > 0) {
          return res.send({
            msg: "membership created successfully",
            success: true,
          });
        } else {
          return res.send({ msg: "membership not created", success: false });
        }
      }
    });
  } catch (error) {
    res.send({ error: error.message.replace(/\"/g, ""), success: false });
  }
};

exports.membershipInfo = (req, res) => {
  const membershipId = req.params.membershipId;
  try {
    Membership.find({ _id: mongoose.Types.ObjectId(membershipId), isDeleted: false }).exec(
      (err, data) => {
        if (err) {
          return res.send({ msg: "membership  not found", success: false });
        } else {
          return res.send({ data, success: true });
        }
      }
    );
  } catch (error) {
    res.send({ error: error.message.replace(/\"/g, ""), success: false });
  }
};

exports.membershipUpdate = async (req, res) => {
  const membershipData = req.body;
  const membershipId = req.params.membershipId;
  try {
    Membership.updateOne({ _id: membershipId }, { $set: membershipData }).exec(
      async (err, data) => {
        if (err) {
          return res.send({
            msg: err,
            success: false,
          });
        } else {
          if (data.modifiedCount > 0) {
            return res.send({
              msg: "membership updated succesfully",
              success: false,
            });
          }
        }
      }
    );
  } catch (err) {
    res.send({ msg: err.message.replace(/\"/g, ""), success: false });
  }
};

exports.remove = async (req, res) => {
  const id = req.params.Id;
  try {
    let delete_membership = await Membership.updateOne(
      { _id: mongoose.Types.ObjectId(id) },
      { $set: { isDeleted: true } }
    );
    if (delete_membership.modifiedCount > 0) {
      return res.send({ msg: "membership deleted successfully", success: true });
    } else {
      return res.send({ msg: "membership not deleted", success: false });
    }
  } catch (err) {
    return res.status(500).json({
      errors: { common: { msg: err.message } },
    });
  }
};
