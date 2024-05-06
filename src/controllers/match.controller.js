const matchService = require("../services/match.service");

const createMatch = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await matchService.createMatch(req.body),
  });
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
module.exports = {
  createMatch,
  getMatchByID,
  updateMatch,
  deleteMatch,
};
