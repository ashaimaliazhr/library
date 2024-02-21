const authRoute = require("./auth_routes.js");
const userRoute = require("./user_routes.js");
const bookRoute = require("./book_routes.js");
const circulationRoute = require("./circulation_routes.js");

const route = {};

route.authRoute = authRoute;
route.userRoute = userRoute;
route.circulationRoute = circulationRoute;
route.bookRoute = bookRoute;

module.exports = route;