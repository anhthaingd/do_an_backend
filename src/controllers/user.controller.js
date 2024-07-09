const userService = require("../services/user.service");

const getUserById = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await userService.getUserById(req.params.userId),
  });
};
const getAllUser = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await userService.getAllUser(),
  });
};
const deleteUser = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await userService.deleteUser(req.params.id),
  });
};

const findUserByParams = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await userService.findUserByParams(req.query),
  });
};
module.exports = {
  getUserById,
  getAllUser,
  deleteUser,
  findUserByParams
};
