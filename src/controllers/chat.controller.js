const chatService = require("./../services/chat.service");

const sendMessage = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await chatService.sendMessage(req.body),
  });
};

const getMessageByInboxHash = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await chatService.getMessageByInboxHash(req.body),
  });
};
module.exports = {
  sendMessage,
  getMessageByInboxHash,
};
