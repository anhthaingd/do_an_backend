const { Match, PlayGround, Location, User, Op } = require("../models");

const createMatch = async ({
  ownerID,
  opponentID,
  start_time,
  end_time,
  locationID,
  price,
  status,
  result,
  note,
  playgroundID,
  date,
  isPublic,
}) => {
  try {
    // Kiểm tra xem có bất kỳ trận đấu nào đã tồn tại trong khoảng thời gian này không
    const overlappingMatches = await Match.findOne({
      where: {
        locationID,
        date,
        playgroundID,
        [Op.or]: [
          {
            start_time: {
              [Op.lte]: end_time,
            },
            end_time: {
              [Op.gte]: start_time,
            },
          },
          {
            start_time: {
              [Op.lte]: start_time,
            },
            end_time: {
              [Op.gte]: end_time,
            },
          },
        ],
      },
    });

    if (overlappingMatches) {
      return false; // Có trận đấu trùng lặp trong khoảng thời gian này
    }

    // Tạo trận đấu mới
    const match = await Match.create({
      ownerID,
      opponentID,
      start_time,
      end_time,
      locationID,
      price,
      status,
      result,
      note,
      playgroundID,
      date,
      isPublic,
    });

    return match;
  } catch (error) {
    console.error("Error creating createMatch:", error);
    throw new Error("Error creating match");
  }
};

const getMatchByID = async (id) => {
  try {
    const data = await Match.findOne({
      where: { id: id },
      include: [
        {
          model: PlayGround,
          as: "playground",
        },
        {
          model: Location,
          as: "location",
        },
        {
          model: User,
          as: "owner",
        },
        {
          model: User,
          as: "opponent",
        },
      ],
    });
    return data;
  } catch (error) {
    console.log("Error at getMatchByID: ", error);
  }
};

const updateMatch = async (id, data) => {
  try {
    const existingMatch = await Match.findOne({
      where: { id: id },
    });
    if (!existingMatch) {
      return null;
    }

    // Update the post with the new data
    await existingMatch.update(data);
    return existingMatch;
  } catch (error) {
    console.log("Error at updateMatch: ", error);
  }
};

const deleteMatch = async (id) => {
  try {
    const data = await Match.findOne({
      where: { id: id },
    });

    await data.destroy();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getMatchByDateAndPlaygroundID = async ({ date, playgroundID }) => {
  try {
    const data = await Match.findAll({
      where: { date: date, playgroundID: playgroundID },
      include: [
        {
          model: PlayGround,
          as: "playground",
        },
        {
          model: Location,
          as: "location",
        },
        {
          model: User,
          as: "owner",
        },
        {
          model: User,
          as: "opponent",
        },
      ],
    });
    return data;
  } catch (error) {
    console.log("Error at getMatchByDateAndPlaygroundID: ", error);
  }
};
const getMatchByDateAndLocationID = async ({ date, locationID }) => {
  try {
    const data = await Match.findAll({
      where: { date: date, locationID: locationID },
      include: [
        {
          model: PlayGround,
          as: "playground",
        },
        {
          model: Location,
          as: "location",
        },
        {
          model: User,
          as: "owner",
        },
        {
          model: User,
          as: "opponent",
        },
      ],
    });
    return data;
  } catch (error) {
    console.log("Error at getMatchByDateAndLocationID: ", error);
  }
};

const getMatchByUserID = async (userID) => {
  try {
    const matches = await Match.findAll({
      where: {
        [Op.or]: [{ ownerID: userID }, { opponentID: userID }],
      },
      include: [
        {
          model: PlayGround,
          as: "playground",
        },
        {
          model: Location,
          as: "location",
        },
        {
          model: User,
          as: "owner",
        },
        {
          model: User,
          as: "opponent",
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return matches;
  } catch (error) {
    console.log("Error at getMatchByUserID: ", error);
  }
};


const getMatchByStatus = async ({ status, locationID }) => {
  try {
    const matches = await Match.findAll({
      where: { status: status, locationID: locationID },
      include: [
        {
          model: PlayGround,
          as: "playground",
        },
        {
          model: Location,
          as: "location",
        },
        {
          model: User,
          as: "owner",
        },
        {
          model: User,
          as: "opponent",
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return matches;
  } catch (error) {
    console.log("Error at getMatchByStatus: ", error);
  }
};

const getMatchByStatusAndOwnerID = async ({ status, ownerID }) => {
  try {
    const matches = await Match.findAll({
      where: { status: status, ownerID: ownerID },
      include: [
        {
          model: PlayGround,
          as: "playground",
        },
        {
          model: Location,
          as: "location",
        },
        {
          model: User,
          as: "owner",
        },
        {
          model: User,
          as: "opponent",
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return matches;
  } catch (error) {
    console.log("Error at getMatchByStatus: ", error);
  }
}
module.exports = {
  createMatch,
  getMatchByID,
  updateMatch,
  deleteMatch,
  getMatchByDateAndPlaygroundID,
  getMatchByDateAndLocationID,
  getMatchByUserID,
  getMatchByStatus,
  getMatchByStatusAndOwnerID
};
