const { Hobby } = require("../models");

const createHobby = async ({ userID, name }) => {
  try {
    const hobby = await Hobby.create({
      userID,
      name,
    });
    return hobby;
  } catch (error) {
    console.error(error);
  }
};

const deleteHobby = async ({ userID, name }) => {
  try {
    const hobby = await Hobby.findOne({
      where: { userID, name },
    });
    if (!hobby) {
      return null;
    }
    await hobby.destroy();
    return hobby;
  } catch (error) {
    console.error(error);
  }
};

const getHobbyByUserID = async (userID) => {
  try {
    const hobbies = await Hobby.findAll({
      where: { userID },
    });
    return hobbies;
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  createHobby,
  deleteHobby,
  getHobbyByUserID
};
