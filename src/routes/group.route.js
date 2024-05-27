import express from "express";
const groupController = require("../controllers/group.controller");
const groupRouter = express.Router();
groupRouter.post("", groupController.createGroup);
groupRouter.get("/:groupID", groupController.getGroupById);
module.exports = groupRouter;
