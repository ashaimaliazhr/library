var express = require('express');
const routes = require("../routes/routes");
const dotenv = require("dotenv").config();
var bodyParser = require("body-parser");


var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Welcome to Library API')
})

app.use('/auth', routes.authRoute);
app.use('/user', routes.userRoute);
app.use("/circulation", routes.circulationRoute);
app.use("/book", routes.bookRoute);


module.exports = app;
