const likePostService = require("./../services/likepost.service");

const createLikePost = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await likePostService.createLikePost(req.body),
  });
};
const deleteLikePost = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await likePostService.deleteLikePost(req.body),
  });
};
const getLikeByPostID = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await likePostService.getLikeByPostID(req.params.postID),
  });
};
module.exports = {
  createLikePost,
  deleteLikePost,
  getLikeByPostID,
};
