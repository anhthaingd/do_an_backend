const informationService = require("../services/information.service");

const createInformation = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await informationService.createInformation(req.body),
  });
};

const updateInformation = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await informationService.updateInformation(
      req.params.userID,
      req.body
    ),
  });
};

const getInformationByUserID = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await informationService.getInformationByUserID(req.params.userID),
  });
};

const getInformationByParam = async (req, res) => {
  // const { page } = req.query;
  return res.status(200).json({
    success: true,
    data: await informationService.getInformationByParam(req.query),
  });
};

module.exports = {
  createInformation,
  updateInformation,
  getInformationByUserID,
  getInformationByParam
};
