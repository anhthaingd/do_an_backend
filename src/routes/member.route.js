import express from "express";
const memberController = require("../controllers/member.controller");
const memberRouter = express.Router();
memberRouter.post("", memberController.createMember);
memberRouter.delete("", memberController.deleteMember);
memberRouter.get("/group/:groupID", memberController.getMemberByGroupID);
memberRouter.get("/user/:userID", memberController.getByUserID);
module.exports = memberRouter;
