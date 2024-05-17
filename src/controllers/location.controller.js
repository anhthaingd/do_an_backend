const locationService = require("../services/location.service");

const createLocation = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await locationService.createLocation(req.body),
  });
};

const getLocationByID = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await locationService.getLocationByID(req.params.id),
  });
};

const updateLocation = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await locationService.updateLocation(req.params.id, req.body),
  });
};

const deleteLocation = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await locationService.deleteLocation(req.params.id),
  });
};

const getLocationByType = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await locationService.getLocationByType(req.params.type),
  });
}
const getLocationByTypeLimit = async (req, res) => {
  // const { page } = req.query;
  return res.status(200).json({
    success: true,
    data: await locationService.getLocationByTypeLimit(req.query),
  });
}

const getLocationByUserID = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await locationService.getLocationByUserID(req.params.ownerID),
  });
}
module.exports = {
  createLocation,
  getLocationByID,
  updateLocation,
  deleteLocation,
  getLocationByType,
  getLocationByTypeLimit,
  getLocationByUserID
};
