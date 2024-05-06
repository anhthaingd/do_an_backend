import authRouter from "./auth";
import locationRouter from "./location.route";
import playgroundRouter from "./playground.route";
import matchRouter from "./match.route";
const initRoutes = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/location", locationRouter);
  app.use("/api/v1/playground", playgroundRouter);
  app.use("/api/v1/match", matchRouter);
  return app.use("/", (req, res) => {
    res.send("server on....");
  });
};

export default initRoutes;
