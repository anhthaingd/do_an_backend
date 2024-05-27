const postService = require("./../services/post.service");

const createPost = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await postService.createPost(req.body),
  });
};
const deleteLike = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await likeService.deleteLike(req.body),
  });
};
const getPostByGroupID = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await postService.getPostByGroupID(req.params.groupID),
  });
};
module.exports = {
  createPost,
  deleteLike,
  getPostByGroupID,
};
