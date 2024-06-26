const locationRouter = require("express").Router();
const locationController = require("./../controllers/location.controller");
locationRouter.post("", locationController.createLocation);
locationRouter.get(
  "/geocoding",
  locationController.getLocationByGeocodingAndRadius
);
locationRouter.get("/all", locationController.getAllLocation);
locationRouter.get("/:id", locationController.getLocationByID);
locationRouter.put("/:id", locationController.updateLocation);
locationRouter.delete("/:id", locationController.deleteLocation);
locationRouter.get("/type/:type", locationController.getLocationByType);
locationRouter.get("", locationController.getLocationByTypeLimit);
locationRouter.get("/owner/:ownerID", locationController.getLocationByUserID);

module.exports = locationRouter;
