const achievementService = require("../services/achievement.service");

const createAchievement = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await achievementService.createAchievement(req.body),
  });
};

const deleteAchievement = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await achievementService.deleteAchievement(req.body),
  });
};

const getAchievementByUserID = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await achievementService.getAchievementByUserID(req.params.userID),
  });
};

const searchAchievement = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await achievementService.searchAchievement(req.query),
  });
};
module.exports = {
  createAchievement,
  deleteAchievement,
  getAchievementByUserID,
  searchAchievement,
};
