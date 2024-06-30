const { Hobby, User, Op } = require("../models");

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

const searchHobby = async (queryParams) => {
  const { hobby } = queryParams;
  let where = {};
  if (hobby) {
    where.name = {
      [Op.like]: `%${hobby}%`,
    };
  }
  try {
    const hobbies = await Hobby.findAll({
      where: { ...where },
      include: [
        {
          model: User,
          as: "user",
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return hobbies;
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  searchHobby,
  createHobby,
  deleteHobby,
  getHobbyByUserID,
};
