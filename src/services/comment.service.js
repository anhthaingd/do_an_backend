const { Comment, Location, User } = require("../models");

const getCommentsByLocationID = async (locationID) => {
  try {
    const comments = await Comment.findAll({
      where: { locationID: locationID },

      include: [
        {
          model: Location,
          as: "location",
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

const createComment = async ({
  userID,
  star,
  content,
  locationID,
}) => {
  try {
    const comments = await Comment.create({
      userID,
      star,
      content,
      locationID,
    });
    return comments;
  } catch (error) {
    console.error("Error creating comment:", error);
  }
};
const deleteComment = async (commentId) => {
  try {
    const comments = await Comment.findOne({ where: { id: commentId } });
    await comments.destroy();
    return comments;
  } catch (error) {
    console.error("Error creating comment:", error);
  }
};
module.exports = {
  getCommentsByLocationID,
  createComment,
  deleteComment,
};
