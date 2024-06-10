const { Post, User, Group } = require("../models");

const createPost = async ({ userID, groupID, content, image, matchID }) => {
  try {
    const post = await Post.create({
      userID,
      groupID,
      content,
      image,
      matchID
    });
    return post;
  } catch (error) {
    console.error(error);
  }
};

const deleteLike = async ({ userID, locationID }) => {
  try {
    const like = await Like.findOne({
      where: { userID: userID, locationID: locationID },
    });
    await like.destroy();
    return like;
  } catch (error) {
    console.error(error);
  }
};

const getPostByGroupID = async (groupID) => {
  try {
    const posts = await Post.findAll({
      where: { groupID: groupID },
      include: [
        {
          model: Group,
          as: "group",
        },
        {
          model: User,
          as: "user",
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return posts;
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  createPost,
  deleteLike,
  getPostByGroupID,
};
