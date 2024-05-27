import express from "express";
const likeController = require("../controllers/like.controller");
const likeRouter = express.Router();
likeRouter.post("", likeController.createLike);
likeRouter.delete("", likeController.deleteLike);
likeRouter.get("/locationID/:locationID", likeController.getLikeByLocationID);
module.exports = likeRouter;
