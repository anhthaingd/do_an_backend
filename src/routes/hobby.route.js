const hobbyRouter = require("express").Router();
const hobbyController = require("./../controllers/hobby.controller");
hobbyRouter.post("", hobbyController.createHobby);
hobbyRouter.delete("", hobbyController.deleteHobby);
hobbyRouter.get("/:userID", hobbyController.getHobbyByUserID);
module.exports = hobbyRouter;
