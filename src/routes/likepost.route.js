import express from "express";
const likePostController = require("../controllers/likepost.controller");
const likePostRouter = express.Router();
likePostRouter.post("", likePostController.createLikePost);
likePostRouter.delete("", likePostController.deleteLikePost);
likePostRouter.get("/postID/:postID", likePostController.getLikeByPostID);
module.exports = likePostRouter;
