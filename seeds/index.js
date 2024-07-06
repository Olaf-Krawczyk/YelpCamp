const express = require("express");
const path = require("path"); // wymaganie patha
const mongoose = require("mongoose"); // wymaganie mongoose
const Campground = require("../models/campground");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
mongoose.connect("mongodb://localhost:27017/yelp-camp"); // connect do bazy

const app = express();

const seedDB = async function () {
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const camp = new Campground({
      location: `${cities[random1000].city}`,
      location: `${cities[random1000].state}`,
    });
    await camp.save();
  }
};
