const authController = require("./auth_controller");
const userController = require("./user_controller");
const bookController = require("./book_controller");
const circulationController = require("./circulation_controller");

const controller = {};

controller.authController = authController;
controller.userController = userController;
controller.bookController = bookController;
controller.circulationController = circulationController;

module.exports = controller;