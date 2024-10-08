const { Group, Op, User } = require("../models");

const createGroup = async ({
  name,
  description,
  image,
  ownerID,
  is_private,
}) => {
  try {
    const group = await Group.create({
      name,
      description,
      image,
      ownerID,
      is_private,
    });
    return group;
  } catch (error) {
    console.error(error);
  }
};

const getGroupById = async (id) => {
  try {
    const group = await Group.findOne({
      where: { id: id },
    });
    return group;
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

const searchGroup = async (query) => {
  try {
    const { name } = query;
    const groups = await Group.findAll({
      where: {
        name: {
          [Op.like]: "%" + name + "%",
        },
      },
    });

    return groups;
  } catch (error) {
    console.error("Error in searchGroup: ", error);
    throw error;
  }
};

const getAllGroup = async () => {
  try {
    const groups = await Group.findAll({
      include: [
        {
          model: User,
          as: "owner",
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return groups;
  } catch (error) {
    console.error(error);
  }
};

const deleteGroup = async (id) => {
  try {
    const group = await Group.findOne({
      where: { id: id },
    });
    await group.destroy();
    return group;
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  createGroup,
  getGroupById,
  deleteLike,
  getLikeByLocationID,
  searchGroup,
  getAllGroup,
  deleteGroup,
};
