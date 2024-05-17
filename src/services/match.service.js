const { Match } = require("../models");

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
}) => {
  try {
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
    });
    return match;
  } catch (error) {
    console.error("Error creating createMatch:", error);
  }
};

const getMatchByID = async (id) => {
  try {
    const data = await Match.findOne({
      where: { id: id },
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
    });
    return data;
  } catch (error) {
    console.log("Error at getMatchByDateAndLocationID: ", error);
  }
}
module.exports = {
  createMatch,
  getMatchByID,
  updateMatch,
  deleteMatch,
  getMatchByDateAndPlaygroundID,
  getMatchByDateAndLocationID
};
