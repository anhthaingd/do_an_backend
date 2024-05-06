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
module.exports = {
  createLocation,
  getLocationByID,
  updateLocation,
  deleteLocation,
};
