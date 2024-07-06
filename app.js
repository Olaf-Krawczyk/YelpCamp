const express = require("express");
const path = require("path"); // wymaganie patha
const mongoose = require("mongoose"); // wymaganie mongoose
const Campground = require("./models/campground");
mongoose.connect("mongodb://localhost:27017/yelp-camp"); // connect do bazy

const app = express();

app.set("view engine", "ejs"); // ustawianie ejs jako vie
app.set("views", path.join(__dirname, "/views")); // ustawianie patha zeby dziala na calym folderze

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/makecampground", async function (req, res) {});

app.listen(80, function () {
  console.log("LISTENING");
});
