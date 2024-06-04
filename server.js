import express from "express";
require("dotenv").config();
import cors from "cors";
import initRoutes from "./src/routes";
import connectDb from "./src/config/connectDatabase";
import {
  getRoomByInboxHash,
  getRoomByOwnerIDAndReceiverID,
} from "./src/services/room.service";
import { getMessageByInboxHash } from "./src/services/chat.service";
const app = express();
const { Server } = require("socket.io");
let onlineUsers = [];
const io = new Server({
  cors: "http://localhost:3000",
});
console.log("socket is run port 2000");
io.on("connection", (socket) => {
  socket.on("addNewUser", (userID) => {
    !onlineUsers.some((user) => user.userID === userID) &&
      userID !== null &&
      onlineUsers.push({ userID: userID, socketID: socket.id });
    console.log("onlineUsers", onlineUsers);
    io.emit("getOnlineUsers", onlineUsers);
  });
  socket.on("sendMessage", async (message) => {
    const user = onlineUsers.find((user) => user.userID === message.receiverID);
    const currentUser = onlineUsers.find(
      (user) => user.userID === message.senderID
    );
    // console.log("message", message);
    const inboxHash = message.newMessage.inboxHash;
    const messages = await getMessageByInboxHash({ inboxHash });
    const room = await getRoomByOwnerIDAndReceiverID({
      ownerID: message.receiverID,
      receiverID: message.senderID,
    });
    const room1 = await getRoomByOwnerIDAndReceiverID({
      ownerID: message.senderID,
      receiverID: message.receiverID,
    });
    io.to(currentUser.socketID).emit("sendPrivateChat", {
      room: room1,
      messages,
    });
    if (user) {
      io.to(user.socketID).emit("getMessage", message);
      io.to(user.socketID).emit("getRoom", room);
      io.to(user.socketID).emit("sendPrivateChat", { room, messages });
    }
  });

  socket.on("disconnect", () => {
    onlineUsers = onlineUsers.filter((user) => user.socketID !== socket.id);
    io.emit("getOnlineUsers", onlineUsers);
  });
});

io.listen(2000);
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
initRoutes(app);
connectDb();
const port = process.env.PORT || 8888;
const listener = app.listen(port, () => {
  console.log(`server in running on the port ${listener.address().port}`);
});
