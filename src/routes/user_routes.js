const express = require("express");
const controller = require("../controllers/controller");
const verifyToken = require("../middlewares/verify_token.js");

const router = express.Router();

//GET
router.get("/singleUser", verifyToken, controller.userController.getUser);
router.get("/:npm", verifyToken, controller.userController.getSingleUser);

// UPDATE
router.put("/update/:npm", controller.userController.updateUser);

router.get("/all",  verifyToken, controller.userController.getAllUser);

module.exports = router;