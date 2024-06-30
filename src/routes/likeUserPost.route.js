import express from "express";
const likeUserPostController = require("../controllers/likeUserPost.controller");
const likeUserPostRouter = express.Router();
likeUserPostRouter.post("", likeUserPostController.createLikeUserPost);
likeUserPostRouter.delete("", likeUserPostController.deleteLikeUserPost);
likeUserPostRouter.get(
  "/userPostID/:userPostID",
  likeUserPostController.getLikeByUserPostID
);
module.exports = likeUserPostRouter;
