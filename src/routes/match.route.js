const matchRouter = require("express").Router();
const matchController = require("./../controllers/match.controller");
matchRouter.post("", matchController.createMatch);
matchRouter.get("/:id", matchController.getMatchByID);
matchRouter.put("/:id", matchController.updateMatch);
matchRouter.delete("/:id", matchController.deleteMatch);
module.exports = matchRouter;
