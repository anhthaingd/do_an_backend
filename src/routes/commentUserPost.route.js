const commentUserPostRouter = require("express").Router();
const commentUserPostController = require("./../controllers/commentUserPost.controller");
commentUserPostRouter.get("/userPostID/:userPostID", commentUserPostController.getCommentUserPosts);
commentUserPostRouter.post("", commentUserPostController.createCommentUserPost);
commentUserPostRouter.delete(
  "/:commentId",
  commentUserPostController.deleteCommentUserPost
);

module.exports = commentUserPostRouter;
