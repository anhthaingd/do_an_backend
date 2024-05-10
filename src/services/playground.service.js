const { PlayGround } = require("../models");

const createPlayground = async ({ locationID, width, length, price, type }) => {
  try {
    const playground = await PlayGround.create({
      locationID,
      width,
      length,
      price,
      type,
    });
    return playground;
  } catch (error) {
    console.error("Error creating playground:", error);
  }
};

const deletePlayground = async (id) => {
  try {
    const data = await PlayGround.findOne({
      where: { id: id },
    });

    await data.destroy();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getPlaygroundByID = async (id) => {
  try {
    const data = await PlayGround.findOne({
      where: { id: id },
    });
    return data;
  } catch (error) {
    console.log("Error at getPlaygroundByID: ", error);
  }
};

const updatePlayground = async (id, data) => {
  try {
    const existingPlayground = await PlayGround.findOne({
      where: { id: id },
    });
    if (!existingPlayground) {
      return null;
    }

    // Update the post with the new data
    await existingPlayground.update(data);
    return existingPlayground;
  } catch (error) {
    console.log("Error at updateLocation: ", error);
  }
};

const getPlaygroundByLocationID = async (locationID) => {
  try {
    const data = await PlayGround.findAll({
      where: { locationID: locationID },
    });
    return data;
  } catch (error) {
    console.log("Error at getPlaygroundByLocationID: ", error);
  }
}
module.exports = {
  createPlayground,
  deletePlayground,
  getPlaygroundByID,
  updatePlayground,
  getPlaygroundByLocationID
};
