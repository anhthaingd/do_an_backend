const initRoutes = (app) => {
  return app.use("/", (req, res) => {
    res.send("server on....");
  });
};

export default initRoutes;
