const { User } = require("../models");

const getUserById = async (userId) => {
  try {
    const data = await User.findOne({
      where: { id: userId },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
const getAllUser = async () => {
  try {
    const data = await User.findAll({
      where: {
        role: [0, 1],
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
const deleteUser = async (id) => {
  try {
    const data = await User.findOne({
      where: { id: id },
    });
    await data.destroy();
    return data;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getUserById,
  getAllUser,
  deleteUser
};
