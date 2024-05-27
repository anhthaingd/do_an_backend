const { Member, Group, User } = require("../models");

const createMember = async ({ userID, groupID }) => {
  try {
    const member = await Member.create({
      userID,
      groupID,
      isJoined: true,
    });
    return member;
  } catch (error) {
    console.error(error);
  }
};

const deleteMember = async ({ userID, groupID }) => {
  try {
    const member = await Member.findOne({
      where: { userID: userID, groupID: groupID },
    });
    await member.destroy();
    return member;
  } catch (error) {
    console.error(error);
  }
};

const getMemberByGroupID = async (groupID) => {
  try {
    const member = await Member.findAll({
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
    });
    return member;
  } catch (error) {
    console.error(error);
  }
};

const getByUserID = async (userID) => {
  try {
    const member = await Member.findAll({
      where: { userID: userID },
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
    });
    return member;
  } catch (error) {
    console.error(error);
  }
}
module.exports = {
  createMember,
  deleteMember,
  getMemberByGroupID,
  getByUserID
};
