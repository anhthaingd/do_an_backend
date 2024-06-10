const informationRouter = require('express').Router();
const informationController = require('./../controllers/information.controller');
informationRouter.post('', informationController.createInformation);
informationRouter.put('/:userID', informationController.updateInformation);
informationRouter.get('/:userID', informationController.getInformationByUserID);
informationRouter.get('', informationController.getInformationByParam);
module.exports = informationRouter;
