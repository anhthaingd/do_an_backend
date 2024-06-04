// const { Op } = require("sequelize");
const { Location, User, Op, sequelize } = require("../models");

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
  longitude,
  latitude,
  name,
}) => {
  try {
    const point = { type: "Point", coordinates: [longitude, latitude] };

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
      coordinates: point,
      name,
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
      include: [
        {
          model: User,
          as: "owner",
        },
      ],
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

const getLocationByTypeLimit = async (queryParams) => {
  const { province, district, ward, type, page = 1, max } = queryParams;
  let where = {};
  if (province) {
    where.province = {
      [Op.like]: `%${province}%`,
    };
  }
  if (district) {
    where.district = {
      [Op.like]: `%${district}%`,
    };
  }
  if (ward) {
    where.ward = {
      [Op.like]: `%${ward}%`,
    };
  }
  if (type) {
    where.type = {
      [Op.eq]: type,
    };
  }
  try {
    const data = await Location.findAndCountAll({
      where: { ...where },
      include: [
        {
          model: User,
          as: "owner",
        },
      ],
      order: [["createdAt", "DESC"]],
      offset: (page - 1) * max || 0,
      limit: parseInt(max) || 1000,
    });
    return data;
  } catch (error) {
    console.log("Error at getLocationByTypeLimit: ", error);
  }
};

const getLocationByUserID = async (ownerID) => {
  try {
    const data = await Location.findAll({
      where: { ownerID: ownerID },
      order: [["createdAt", "DESC"]],
    });
    return data;
  } catch (error) {
    console.log("Error at getLocationByUserID: ", error);
  }
};

const getAllLocation = async () => {
  try {
    const data = await Location.findAll();
    return data;
  } catch (error) {
    console.log("Error at getAllLocation: ", error);
  }
};

const getLocationByGeocodingAndRadius = async ({
  longitude,
  latitude,
  radius = 20,
  type,
}) => {
  try {
    let whereClause = {
      [Op.and]: [
        sequelize.where(
          sequelize.fn(
            "ST_Distance_Sphere",
            sequelize.col("coordinates"),
            sequelize.fn("ST_GeomFromText", `POINT(${longitude} ${latitude})`)
          ),
          { [Op.lte]: radius * 1000 } // Convert radius to meters
        ),
      ],
    };

    if (type) {
      whereClause[Op.and].push({ type });
    }

    const data = await Location.findAll({
      where: whereClause,
    });
    return data;
  } catch (error) {
    console.log("Error at getLocationByGeocodingAndRadius: ", error);
    throw error;
  }
};

module.exports = {
  createLocation,
  getLocationByID,
  updateLocation,
  deleteLocation,
  getLocationByType,
  getLocationByTypeLimit,
  getLocationByUserID,
  getAllLocation,
  getLocationByGeocodingAndRadius,
};
