const hobbyService = require("../services/hobby.service");

const createHobby = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await hobbyService.createHobby(req.body),
  });
};

const deleteHobby = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await hobbyService.deleteHobby(req.body),
  });
};

const getHobbyByUserID = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await hobbyService.getHobbyByUserID(req.params.userID),
  });
};

const searchHobby = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await hobbyService.searchHobby(req.query),
  });
}
module.exports = {
  createHobby,
  deleteHobby,
  getHobbyByUserID,
  searchHobby,
};
