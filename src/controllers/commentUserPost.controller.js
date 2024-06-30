const commentUserPostService = require("./../services/commentUserPost.service");

const getCommentUserPosts = async (req, res) => {
  const userPostID = req.params.userPostID;
  return res.status(200).json({
    success: true,
    data: await commentUserPostService.getCommentsByUserPostID(userPostID),
  });
};

const createCommentUserPost = async (req, res) => {
  return res.status(200).json({
    success: true,
    comment: await commentUserPostService.createCommentUserPost(req.body),
  });
};

const deleteCommentUserPost = async (req, res) => {
  return res.status(200).json({
    success: true,
    comment: await commentUserPostService.deleteCommentUserPost(
      req.params.commentId
    ),
  });
};

module.exports = {
  getCommentUserPosts,
  createCommentUserPost,
  deleteCommentUserPost,
};
