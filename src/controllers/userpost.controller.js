const userPostService = require("./../services/userpost.service");

const createUserPost = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await userPostService.createUserPost(req.body),
  });
};

const getUserPostByOwnerID = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await userPostService.getUserPostByOwnerID(req.params.ownerID),
  });
};
module.exports = {
  createUserPost,
  getUserPostByOwnerID,
};
