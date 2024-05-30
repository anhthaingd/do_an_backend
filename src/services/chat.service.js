const { Room, Chat, Group } = require("../models");
import moment from "moment";
const sendMessage = async ({ senderID, receiverID, message }) => {
  try {
    const inboxHash = `${senderID}-${receiverID}`;

    // Kiểm tra nếu phòng đã tồn tại
    const existingRoom = await Room.findAll({
      where: {
        ownerID: senderID,
        receiverID,
      },
    });

    const ownerRoom = await Room.findOne({
      where: {
        ownerID: senderID,
        receiverID,
      },
    });

    const receiverRoom = await Room.findOne({
      where: {
        ownerID: receiverID,
        receiverID: senderID,
      },
    });
    if (ownerRoom) {
      const chat = await Chat.create({
        senderID,
        message,
        inboxHash: receiverRoom.inboxHash,
      });
      await ownerRoom.update({
        unSeenNumbers: 0,
        seen: moment().format("YYYY-MM-DD HH:mm:ss"),
        lastMsg: message,
        sentByOwner: true,
      });
      await receiverRoom.update({
        unSeenNumbers: receiverRoom.unSeenNumbers + 1,
        seen: null,
        lastMsg: message,
        sentByOwner: false,
      });
      return chat;
    } else {
      const room1 = await Room.create({
        ownerID: senderID,
        receiverID,
        inboxHash,
        seen: moment().format("YYYY-MM-DD HH:mm:ss"),
        unSeenNumbers: 0,
        lastMsg: message,
        sentByOwner: true,
      });

      const room2 = await Room.create({
        ownerID: receiverID,
        receiverID: senderID,
        inboxHash,
        seen: null,
        unSeenNumbers: 1,
        lastMsg: message,
        sentByOwner: false,
      });
      const chat = await Chat.create({
        senderID,
        message,
        inboxHash,
      });
      return chat;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getMessageByInboxHash = async ({ inboxHash }) => {
  try {
    const messages = await Chat.findAll({
      where: {
        inboxHash,
      },
    });

    return messages;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
module.exports = {
  sendMessage,
  getMessageByInboxHash,
};
