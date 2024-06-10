const { UserPost, User, Match, Group } = require("../models");

const createUserPost = async ({
  ownerID,
  writerID,
  content,
  image,
  matchID,
}) => {
  try {
    const userPost = await UserPost.create({
      ownerID,
      writerID,
      content,
      image,
      matchID,
    });
    return userPost;
  } catch (error) {
    console.error(error);
  }
};

const getUserPostByOwnerID = async (ownerID) => {
  try {
    const UserPosts = await UserPost.findAll({
      where: { ownerID: ownerID },
      include: [
        {
          model: User,
          as: "writer",
        },
        {
          model: User,
          as: "owner",
        },
        {
          model: Match,
          as: "match",
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return UserPosts;
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  createUserPost,
  getUserPostByOwnerID,
};
