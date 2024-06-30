const matchService = require("../services/match.service");

const createMatch = async (req, res) => {
  try {
    const result = await matchService.createMatch(req.body);
    if (result) {
      return res.status(200).json({
        success: true,
        data: result,
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "Khung giờ này đã có người khác đặt.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

const getMatchByID = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await matchService.getMatchByID(req.params.id),
  });
};

const updateMatch = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await matchService.updateMatch(req.params.id, req.body),
  });
};

const deleteMatch = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await matchService.deleteMatch(req.params.id),
  });
};
const getMatchByDateAndPlaygroundID = async (req, res) => {
  console.log(req.body);
  return res.status(200).json({
    success: true,
    data: await matchService.getMatchByDateAndPlaygroundID(req?.body),
  });
};
const getMatchByDateAndLocationID = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await matchService.getMatchByDateAndLocationID(req?.body),
  });
};

const getMatchByUserID = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await matchService.getMatchByUserID(req.params.userID),
  });
};

module.exports = {
  createMatch,
  getMatchByID,
  updateMatch,
  deleteMatch,
  getMatchByDateAndPlaygroundID,
  getMatchByDateAndLocationID,
  getMatchByUserID,
};
