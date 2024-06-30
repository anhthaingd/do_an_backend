const { LikeUserPost, Post, User } = require("../models");

const createLikeUserPost = async ({ userID, userPostID }) => {
  try {
    const like = await LikeUserPost.create({
      userID,
      userPostID,
      status: true,
    });
    return like;
  } catch (error) {
    console.error(error);
  }
};

const deleteLikeUserPost = async ({ userID, userPostID }) => {
  try {
    const like = await LikeUserPost.findOne({
      where: { userID: userID, userPostID: userPostID },
    });
    await like.destroy();
    return like;
  } catch (error) {
    console.error(error);
  }
};

const getLikeByUserPostID = async (userPostID) => {
  try {
    const like = await LikeUserPost.findAll({
      where: { userPostID: userPostID },
    });
    return like;
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  createLikeUserPost,
  deleteLikeUserPost,
  getLikeByUserPostID,
};
