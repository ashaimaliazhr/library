const express = require("express");
const controller = require("../controllers/controller");

const router = express.Router();

// GET BOOK BY TITLE
router.post("/title_book", controller.bookController.getBooks);
router.post("/item_book", controller.bookController.getItemBooks);
router.post("/author_book", controller.bookController.getAuthorBooks);

module.exports = router;
