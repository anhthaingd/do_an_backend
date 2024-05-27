const commentRouter = require("express").Router();
const commentController = require("./../controllers/comment.controller");
commentRouter.get("/locationID/:locationID", commentController.getComments);
commentRouter.post("", commentController.createComment);
commentRouter.delete("/:commentId", commentController.deleteComment);
module.exports = commentRouter;
