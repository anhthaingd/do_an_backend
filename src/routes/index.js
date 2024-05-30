import authRouter from "./auth";
import locationRouter from "./location.route";
import playgroundRouter from "./playground.route";
import matchRouter from "./match.route";
import userRouter from "./user.route";
import commentRouter from "./comment.route";
import likeRouter from "./like.route";
import groupRouter from "./group.route";
import postRouter from "./post.route";
import memberRouter from "./member.route";
import likePostRouter from "./likepost.route";
import commentPostRouter from "./commentpost.route";
import roomRouter from "./room.route";
import chatRouter from "./chat.route";
const initRoutes = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/location", locationRouter);
  app.use("/api/v1/playground", playgroundRouter);
  app.use("/api/v1/match", matchRouter);
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/comment", commentRouter);
  app.use("/api/v1/like", likeRouter);
  app.use("/api/v1/group", groupRouter);
  app.use("/api/v1/post", postRouter);
  app.use("/api/v1/member", memberRouter);
  app.use("/api/v1/likepost", likePostRouter);
  app.use("/api/v1/commentpost", commentPostRouter);
  app.use("/api/v1/room", roomRouter);
  app.use("/api/v1/chat", chatRouter);
  return app.use("/", (req, res) => {
    res.send("server on....");
  });
};

export default initRoutes;
