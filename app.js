var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// User-inputted
var dotenv = require("dotenv");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");

// Environment Variables
dotenv.config({ path: "./config.env" });

const router = require("./routes/router");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './client/build')));
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: true }));

// cors origin URL - Allow inbound traffic from origin
corsOptions = {
  origin: "https://foodudebeta.herokuapp.com/",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use('/', router);
// app.use('/users', usersRouter);
app.use(express.static(path.join(__dirname, './client/build')));

// MONGODB STUFF
const DB = process.env.MONGODB_URL.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB connection successful!"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
