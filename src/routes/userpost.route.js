import express from "express";
const userPostController = require("../controllers/userpost.controller");
const userPostRouter = express.Router();
userPostRouter.post("", userPostController.createUserPost);
userPostRouter.get("/owner/:ownerID", userPostController.getUserPostByOwnerID);
module.exports = userPostRouter;
