const commentPostRouter = require("express").Router();
const commentPostController = require("./../controllers/commentpost.controller");
commentPostRouter.get("/postID/:postID", commentPostController.getCommentPosts);
commentPostRouter.post("", commentPostController.createCommentPost);
commentPostRouter.delete(
  "/:commentId",
  commentPostController.deleteCommentPost
);
module.exports = commentPostRouter;
