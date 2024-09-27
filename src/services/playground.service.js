const { PlayGround, Location, Op } = require("../models");
const createPlayground = async ({
  name,
  locationID,
  width,
  length,
  price,
  position,
  yard_surface,
  quantity,
}) => {
  try {
    const playground = await PlayGround.create({
      name,
      locationID,
      width,
      length,
      price,
      position,
      yard_surface,
      quantity,
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
      include: [
        {
          model: Location,
          as: "location",
        },
      ],
    });
    return data;
  } catch (error) {
    console.log("Error at getPlaygroundByLocationID: ", error);
  }
};

const searchPlayground = async (queryParams) => {
  const { position, yard_surface, quantity } = queryParams;
  if (!position && !yard_surface && !quantity) return;
  let where = {};
  if (position) {
    where.position = {
      [Op.like]: `%${position}%`,
    };
  }
  if (yard_surface) {
    where.yard_surface = {
      [Op.like]: `%${yard_surface}%`,
    };
  }
  if (quantity) {
    where.quantity = {
      [Op.like]: `%${quantity}%`,
    };
  }
  try {
    const data = await PlayGround.findAll({
      where: { ...where },
      include: [
        {
          model: Location,
          as: "location",
        },
      ],
    });
    return data;
  } catch (error) {
    console.log("Error at searchPlayground: ", error);
  }
};
module.exports = {
  createPlayground,
  deletePlayground,
  getPlaygroundByID,
  updatePlayground,
  getPlaygroundByLocationID,
  searchPlayground,
};
