const locationRouter = require("express").Router();
const locationController = require("./../controllers/location.controller");
locationRouter.post("", locationController.createLocation);
locationRouter.get("/:id", locationController.getLocationByID);
locationRouter.put("/:id", locationController.updateLocation);
locationRouter.delete("/:id", locationController.deleteLocation);
module.exports = locationRouter;
