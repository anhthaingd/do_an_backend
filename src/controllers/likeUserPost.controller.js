const likeUserPostService = require("./../services/likeUserPost.service");

const createLikeUserPost = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await likeUserPostService.createLikeUserPost(req.body),
  });
};
const deleteLikeUserPost = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await likeUserPostService.deleteLikeUserPost(req.body),
  });
};
const getLikeByUserPostID = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await likeUserPostService.getLikeByUserPostID(req.params.userPostID),
  });
};
module.exports = {
  createLikeUserPost,
  deleteLikeUserPost,
  getLikeByUserPostID,
};
