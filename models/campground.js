const mongoose = require("mongoose"); // wymaganie mongoose
const { Schema } = mongoose; // do tworzenia schematow

const CampgroundSchema = new Schema({
  title: String,
  price: String,
  description: String,
  location: String,
});

module.exports = mongoose.model("Campground", CampgroundSchema);
