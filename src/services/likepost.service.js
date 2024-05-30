const { LikePost, Post, User } = require("../models");

const createLikePost = async ({ userID, postID }) => {
  try {
    const like = await LikePost.create({
      userID,
      postID,
      status: true,
    });
    return like;
  } catch (error) {
    console.error(error);
  }
};

const deleteLikePost = async ({ userID, postID }) => {
  try {
    const like = await LikePost.findOne({
      where: { userID: userID, postID: postID },
    });
    await like.destroy();
    return like;
  } catch (error) {
    console.error(error);
  }
};

const getLikeByPostID = async (postID) => {
  try {
    const like = await LikePost.findAll({
      where: { postID: postID },
    });
    return like;
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  createLikePost,
  deleteLikePost,
  getLikeByPostID,
};
