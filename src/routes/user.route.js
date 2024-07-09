import express from "express";
const userController = require("../controllers/user.controller");
const userRouter = express.Router();
userRouter.get("/search", userController.findUserByParams);
userRouter.get("/:userId", userController.getUserById);
userRouter.get("/", userController.getAllUser);
userRouter.delete("/:id", userController.deleteUser);

module.exports = userRouter;
