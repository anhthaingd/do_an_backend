const { Like, Location, User } = require("../models");

const createLike = async ({ userID, locationID }) => {
  try {
    const like = await Like.create({
      userID,
      locationID,
      status: true,
    });
    return like;
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

const getLikeByLocationID = async (locationID) => {
  try {
    const like = await Like.findAll({
      where: { locationID: locationID },
    });
    return like;
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  createLike,
  deleteLike,
  getLikeByLocationID,
};
