const achievementRouter = require("express").Router();
const achievementController = require("./../controllers/achievement.controller");
achievementRouter.post("", achievementController.createAchievement);
achievementRouter.delete("", achievementController.deleteAchievement);
achievementRouter.get("/:userID", achievementController.getAchievementByUserID);
achievementRouter.get("", achievementController.searchAchievement);
module.exports = achievementRouter;
