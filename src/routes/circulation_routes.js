const express = require("express");
const controller = require("../controllers/controller");

const router = express.Router();

//Circulation
router.post(
    "/history", 
    controller.circulationController.getCirculationHistory
);

router.post(
    "/status",
    controller.circulationController.getCirculationStatus
);

router.post(
    "/account",
    controller.circulationController.getCirculationAccount
);

module.exports = router;