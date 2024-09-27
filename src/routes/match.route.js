const matchRouter = require("express").Router();
const matchController = require("./../controllers/match.controller");
matchRouter.post("", matchController.createMatch);
matchRouter.get("/:id", matchController.getMatchByID);
matchRouter.put("/:id", matchController.updateMatch);
matchRouter.delete("/:id", matchController.deleteMatch);
matchRouter.post("/date/playground", matchController.getMatchByDateAndPlaygroundID);
matchRouter.post("/date/location", matchController.getMatchByDateAndLocationID);
matchRouter.get("/user/:userID", matchController.getMatchByUserID);
matchRouter.post("/status/owner", matchController.getMatchByStatusAndOwnerID);
matchRouter.post("/status", matchController.getMatchByStatus);
module.exports = matchRouter;

