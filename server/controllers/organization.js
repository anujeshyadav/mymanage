const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const { Organization } = require("../models/index/index");

exports.createOrganization = asyncHandler(async (req, res) => {
  try {
    const payload = req.body;
    payload.createdBy = req.user._id;
    payload.url = `https://www.mymanager.com/${payload.path}`;
    await Organization.create(payload);
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.send({ success: false, message: error.message.replace(/"/g, "") });
  }
});

exports.editOrganization = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    payload.updatedBy = req.user._id;
    if (payload.path) {
      payload.url = `https://www.mymanager.com/${payload.path}`;
    }
    await Organization.findByIdAndUpdate(mongoose.Types.ObjectId(id), { $set: payload });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.send({ success: false, message: error.message.replace(/"/g, "") });
  }
});

exports.getOrganizations = asyncHandler(async (req, res) => {
  try {
    const orgs = await Organization.find();
    return res.status(200).json(orgs);
  } catch (error) {
    return res.send({ success: false, message: error.message.replace(/"/g, "") });
  }
});

exports.getOrganizationById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const orgs = await Organization.findOne({ _id: id });
    if (orgs === null) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    return res.status(200).json(orgs);
  } catch (error) {
    return res.send({ success: false, message: error.message.replace(/"/g, "") });
  }
});
