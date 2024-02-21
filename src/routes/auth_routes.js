const express = require("express");
const controller = require("../controllers/controller");
const verifyToken = require("../middlewares/verify_token");

const router = express.Router();

//LOGIN
router.post("/login", controller.authController.login);
router.delete("/logout", controller.authController.logout);

module.exports = router;