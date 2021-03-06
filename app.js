var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// TODO: to be removed
require("./models/User");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());

// !!! formdan gelen bilgileri body'e yerlestiren middleware (req.body.firstName) !!!
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// MVC Structure

// Model - PostgreSQL
// View - EJS Template
// Controller

// RESTful API (Turkish Description)
// API request-response iletisimini saglar.
// Requestlerin islemden gecirilip cevap verilmesi durumuna API denir.
// Uygulamayla iletisime girmek icin ise yarayan kod parcacigina API denir.
// API icerisinden gelen istegin response olarak belirli bir durum iceren
// state uzerinden geri donmesini saglayacak bir yapi icermesine RESTful denir.

// CRUD OPERATIONS  is a must for RESTful API.

// CREATE - add user

// READ - (get()) - list users

// UPDATE - edit user

// DELETE - delete user

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
