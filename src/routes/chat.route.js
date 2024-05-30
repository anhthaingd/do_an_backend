import express from "express";
const chatController = require("../controllers/chat.controller");
const chatRouter = express.Router();
chatRouter.post("", chatController.sendMessage);
chatRouter.post("/inboxHash", chatController.getMessageByInboxHash);
module.exports = chatRouter;
