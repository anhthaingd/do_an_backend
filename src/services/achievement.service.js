const { Achievement, Op, User } = require("../models");

const createAchievement = async ({ userID, name }) => {
  try {
    const achievement = await Achievement.create({
      userID,
      name,
    });
    return achievement;
  } catch (error) {
    console.error(error);
  }
};

const deleteAchievement = async ({ userID, name }) => {
  try {
    const achievement = await Achievement.findOne({
      where: { userID, name },
    });
    if (!achievement) {
      return null;
    }
    await achievement.destroy();
    return achievement;
  } catch (error) {
    console.error(error);
  }
};

const getAchievementByUserID = async (userID) => {
  try {
    const achievement = await Achievement.findAll({
      where: { userID },
    });
    return achievement;
  } catch (error) {
    console.error(error);
  }
};

const searchAchievement = async (queryParams) => {
  const { achievement } = queryParams;
  let where = {};
  if (achievement) {
    where.name = {
      [Op.like]: `%${achievement}%`,
    };
  }
  try {
    const achievements = await Achievement.findAll({
      where: { ...where },
      include: [
        {
          model: User,
          as: "user",
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return achievements;
  } catch (error) {
    console.error("Error searching achievements:", error);
    throw error;
  }
};
module.exports = {
  createAchievement,
  deleteAchievement,
  getAchievementByUserID,
  searchAchievement,
};
