const { Schema, model } = require("mongoose");

const BikeSchema = Schema({
  type: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  heading: Number,
});

module.exports = model("Bike", BikeSchema);
