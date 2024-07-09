import express from "express";
const groupController = require("../controllers/group.controller");
const groupRouter = express.Router();
groupRouter.get("", groupController.getAllGroup);
groupRouter.get("/search", groupController.searchGroup);
groupRouter.post("", groupController.createGroup);
groupRouter.get("/:groupID", groupController.getGroupById);
groupRouter.delete("/:groupID", groupController.deleteGroup);
module.exports = groupRouter;
