const playgroundRouter = require("express").Router();
const playgroundController = require("./../controllers/playground.controller");
playgroundRouter.post("", playgroundController.createPlayground);
playgroundRouter.delete("/:id", playgroundController.deletePlayground);
playgroundRouter.get("/:id", playgroundController.getPlaygroundByID);
playgroundRouter.put("/:id", playgroundController.updatePlayground);
module.exports = playgroundRouter;
