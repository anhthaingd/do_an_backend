const { Room, User, Group } = require("../models");
import moment from "moment";
import { getMessageByInboxHash } from "../services/chat.service";
const createRoom = async ({ ownerID, receiverID }) => {
  try {
    const now = Date.now();
    const inboxHash = `${ownerID}-${receiverID}`;

    // Kiểm tra nếu phòng đã tồn tại
    const existingRoom = await Room.findOne({
      where: {
        ownerID,
        receiverID,
      },
    });

    if (existingRoom) {
      return existingRoom;
    }

    const room1 = await Room.create({
      ownerID,
      receiverID,
      inboxHash,
    });

    const room2 = await Room.create({
      ownerID: receiverID,
      receiverID: ownerID,
      inboxHash,
    });

    return { room1, room2 };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getRoomByUserID = async (userID) => {
  try {
    const rooms = await Room.findAll({
      where: {
        ownerID: userID,
      },
      include: [
        {
          model: User,
          as: "receiver",
        },
        {
          model: User,
          as: "owner",
        },
      ],
    });

    return rooms;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateRoom = async (roomID) => {
  try {
    const room = await Room.findOne({
      where: {
        id: roomID,
      },
    });

    if (!room) {
      throw new Error("Room not found");
    }

    await room.update({
      updatedAt: Date.now(),
      unSeenNumbers: 0,
      seen: moment().format("YYYY-MM-DD HH:mm:ss"),
    });

    return room;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getRoomByInboxHash = async ({ inboxHash }) => {
  try {
    const room = await Room.findAll({
      where: {
        inboxHash,
      },
    });

    return room;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getRoomByOwnerIDAndReceiverID = async ({ ownerID, receiverID }) => {
  try {
    const room = await Room.findOne({
      where: {
        ownerID,
        receiverID,
      },
      include: [
        {
          model: User,
          as: "receiver",
        },
        {
          model: User,
          as: "owner",
        },
      ],
    });

    return room;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getRoomByID = async (roomID) => {
  try {
    const room = await Room.findOne({
      where: {
        id: roomID,
      },
      include: [
        {
          model: User,
          as: "receiver",
        },
        {
          model: User,
          as: "owner",
        },
      ],
    });
    room.unSeenNumbers = 0;
    room.seen = moment().format("YYYY-MM-DD HH:mm:ss");
    await room.save();
    const messages = await getMessageByInboxHash({ inboxHash: room.inboxHash });
    return { room, messages };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
module.exports = {
  createRoom,
  getRoomByUserID,
  updateRoom,
  getRoomByInboxHash,
  getRoomByOwnerIDAndReceiverID,
  getRoomByID,
};
