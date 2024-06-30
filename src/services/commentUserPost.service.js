const { CommentUserPost, UserPost, User } = require("../models");

const getCommentsByUserPostID = async (userPostID) => {
  try {
    const comments = await CommentUserPost.findAll({
      where: { userPostID: userPostID },

      include: [
        {
          model: UserPost,
          as: "userPost",
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

const createCommentUserPost = async ({ userID, content, userPostID }) => {
  try {
    const comments = await CommentUserPost.create({
      userID,
      content,
      userPostID,
    });
    return comments;
  } catch (error) {
    console.error("Error creating comment:", error);
  }
};
const deleteCommentUserPost = async (commentId) => {
  try {
    const comments = await CommentUserPost.findOne({
      where: { id: commentId },
    });
    await comments.destroy();
    return comments;
  } catch (error) {
    console.error("Error creating comment:", error);
  }
};
module.exports = {
  getCommentsByUserPostID,
  createCommentUserPost,
  deleteCommentUserPost,
};
