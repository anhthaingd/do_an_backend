const { Location } = require("../models");

const createLocation = async ({
  ownerID,
  description,
  sale,
  type,
  province,
  district,
  ward,
  location_detail,
  open_time,
  close_time,
  image,
  coordinates,
  name
}) => {
  try {
    const locations = await Location.create({
      ownerID,
      description,
      sale,
      type,
      province,
      district,
      ward,
      location_detail,
      open_time,
      close_time,
      image,
      coordinates,
      name
    });
    return locations;
  } catch (error) {
    console.error("Error creating location:", error);
  }
};

const getLocationByID = async (id) => {
  try {
    const data = await Location.findOne({
      where: { id: id },
    });
    return data;
  } catch (error) {
    console.log("Error at getLocationByID: ", error);
  }
};

const updateLocation = async (id, data) => {
  try {
    const existingLocation = await Location.findOne({
      where: { id: id },
    });
    if (!existingLocation) {
      return null;
    }

    // Update the post with the new data
    await existingLocation.update(data);
    return existingLocation;
  } catch (error) {
    console.log("Error at updateLocation: ", error);
  }
};

const deleteLocation = async (id) => {
  try {
    const data = await Location.findOne({
      where: { id: id },
    });

    await data.destroy();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getLocationByType = async (type) => {
  try {
    const data = await Location.findAll({
      where: { type: type },
    });
    return data;
  } catch (error) {
    console.log("Error at getLocationByType: ", error);
  }
};

const getLocationByTypeLimit = async (type, offset) => {
  try {
    const data = await Location.findAndCountAll({
      where: { type: type },
      offset: (offset - 1) * 12 || 0,
      limit: 12,
    });
    return data;
  } catch (error) {
    console.log("Error at getLocationByTypeLimit: ", error);
  }
}

const getLocationByUserID = async (ownerID) => {
  try {
    const data = await Location.findAll({
      where: { ownerID: ownerID },
    });
    return data;
  } catch (error) {
    console.log("Error at getLocationByUserID: ", error);
  }
}
module.exports = {
  createLocation,
  getLocationByID,
  updateLocation,
  deleteLocation,
  getLocationByType,
  getLocationByTypeLimit,
  getLocationByUserID
};
