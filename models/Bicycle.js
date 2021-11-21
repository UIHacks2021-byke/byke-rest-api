const { Schema, model } = require("mongoose");

const BikeSchema = Schema({
  type: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});

module.exports = model("Bike", BikeSchema);
