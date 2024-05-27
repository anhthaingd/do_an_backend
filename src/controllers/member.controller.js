const memberService = require("./../services/member.service");

const createMember = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await memberService.createMember(req.body),
  });
};
const deleteMember = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await memberService.deleteMember(req.body),
  });
};
const getMemberByGroupID = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await memberService.getMemberByGroupID(req.params.groupID),
  });
};
const getByUserID = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await memberService.getByUserID(req.params.userID),
  });
};
module.exports = {
  createMember,
  deleteMember,
  getMemberByGroupID,
  getByUserID,
};
