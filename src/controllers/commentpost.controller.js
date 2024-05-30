const commentPostService = require("./../services/commentpost.service");

const getCommentPosts = async (req, res) => {
  const postID = req.params.postID;
  return res.status(200).json({
    success: true,
    data: await commentPostService.getCommentsByPostID(postID),
  });
};

const createCommentPost = async (req, res) => {
  return res.status(200).json({
    success: true,
    comment: await commentPostService.createCommentPost(req.body),
  });
};

const deleteCommentPost = async (req, res) => {
  return res.status(200).json({
    success: true,
    comment: await commentPostService.deleteCommentPost(req.params.commentId),
  });
};

module.exports = {
  getCommentPosts,
  createCommentPost,
  deleteCommentPost,
};
