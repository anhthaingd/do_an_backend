import express from "express";
const roomController = require("../controllers/room.controller");
const roomRouter = express.Router();
roomRouter.post("", roomController.createRoom);
roomRouter.get("/userID/:userID", roomController.getRoomByUserID);
roomRouter.put("/:roomID", roomController.updateRoom);
module.exports = roomRouter;
