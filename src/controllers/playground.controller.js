const playgroundService = require("../services/playground.service");

const createPlayground = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await playgroundService.createPlayground(req.body),
  });
};

const deletePlayground = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await playgroundService.deletePlayground(req.params.id),
  });
};

const getPlaygroundByID = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await playgroundService.getPlaygroundByID(req.params.id),
  });
};

const updatePlayground = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await playgroundService.updatePlayground(req.params.id, req.body),
  });
};
const getPlaygroundByLocationID = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await playgroundService.getPlaygroundByLocationID(req.params.locationID),
  });
}

module.exports = {
  createPlayground,
  deletePlayground,
  getPlaygroundByID,
  updatePlayground,
  getPlaygroundByLocationID
};
