const { Information, User, Op } = require("../models");

const createInformation = async ({
  userID,
  workplace,
  highSchool,
  university,
  address,
  province,
  district,
  ward,
}) => {
  try {
    const information = await Information.create({
      userID,
      workplace,
      highSchool,
      university,
      address,
      province,
      district,
      ward,
    });
    return information;
  } catch (error) {
    console.error(error);
  }
};

const updateInformation = async (userID, data) => {
  try {
    const information = await Information.findOne({
      where: { userID: userID },
    });
    if (!information) {
      return null;
    }
    await information.update(data);
    return information;
  } catch (error) {
    console.error(error);
  }
};

const getInformationByUserID = async (userID) => {
  try {
    const information = await Information.findOne({
      where: { userID: userID },
    });
    return information;
  } catch (error) {
    console.error(error);
  }
};

const getInformationByParam = async (queryParams) => {
  const {
    province,
    district,
    ward,
    highSchool,
    page = 1,
    max,
    university,
    homeTown,
    workplace,
    address,
  } = queryParams;
  let where = {};
  if (address) {
    where.address = {
      [Op.like]: `%${address}%`,
    };
  }
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
  if (highSchool) {
    where.highSchool = {
      [Op.like]: `%${highSchool}%`,
    };
  }
  if (workplace) {
    where.workplace = {
      [Op.like]: `%${workplace}%`,
    };
  }

  if (university) {
    where.university = {
      [Op.like]: `%${university}%`,
    };
  }

  if (homeTown) {
    where.homeTown = {
      [Op.like]: `%${homeTown}%`,
    };
  }
  try {
    const data = await Information.findAndCountAll({
      where: { ...where },
      include: [
        {
          model: User,
          as: "user",
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
module.exports = {
  createInformation,
  updateInformation,
  getInformationByUserID,
  getInformationByParam,
};
