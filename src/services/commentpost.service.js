const { CommentPost, Post, User } = require("../models");

const getCommentsByPostID = async (postID) => {
  try {
    const comments = await CommentPost.findAll({
      where: { postID: postID },

      include: [
        {
          model: Post,
          as: "post",
        },
        {
          model: User,
          as: "user",
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return comments;
  } catch (error) {
    console.log(error);
  }
};

const createCommentPost = async ({ userID, content, postID }) => {
  try {
    const comments = await CommentPost.create({
      userID,
      content,
      postID,
    });
    return comments;
  } catch (error) {
    console.error("Error creating comment:", error);
  }
};
const deleteCommentPost = async (commentId) => {
  try {
    const comments = await CommentPost.findOne({ where: { id: commentId } });
    await comments.destroy();
    return comments;
  } catch (error) {
    console.error("Error creating comment:", error);
  }
};
module.exports = {
  getCommentsByPostID,
  createCommentPost,
  deleteCommentPost,
};
