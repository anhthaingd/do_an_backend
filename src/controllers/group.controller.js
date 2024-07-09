const groupService = require("./../services/group.service");

const createGroup = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await groupService.createGroup(req.body),
  });
};

const getGroupById = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await groupService.getGroupById(req.params.groupID),
  });
};

const searchGroup = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await groupService.searchGroup(req.query),
  });
};

const getAllGroup = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await groupService.getAllGroup(),
  });
};

const deleteGroup = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await groupService.deleteGroup(req.params.groupID),
  });
};
module.exports = {
  createGroup,
  getGroupById,
  searchGroup,
  getAllGroup,
  deleteGroup
};
