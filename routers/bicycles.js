const express = require('express');
const Bike = require('../models/Bicycle');
const router = express.Router();

// creating a new bicycle
router.post("/", async (req, res) => {
  const bike = new Bike({
    type:  req.body.type,
    longitude: req.body.longitude,
    latitude: req.body.latitude,
  })
  try {
    const newBike = await bike.save();
    res.status(201).json(newBike);
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// getting all bicycles
router.get("/", async (req, res) => {
  try {
    const bikes = await Bikes.find();
    res.json(bikes);
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
// getting one bicycle
router.get("/:id", getBike, async (req, res) => {
  res.json(res.bike);
})
// deleting one bicycle
router.delete("/:id", getBike, async(req, res) =>{
  try {
    await res.bike.remove(
    res.json({message: "Deleted bike"})
    )
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

// updating one bicycle
router.patch("/:id", getBike, async(req, res)=>{
  if(req.body.latitude != null){
    res.bike.latitude = req.body.latitude
  }
  if(req.body.longitude != null){
    res.bike.longitude = req.body.longitude;
  }
  try {
    const updatedBike = await res.bike.save();
    res.json(updatedBike);
  } catch (error) {
    res.status(400).json({message: error.message})
  }
});

// middlewares
async function getBike(req, res, next) {
  let bike
  try {
    bike = await Bike.findById(req.params.id);
    if (bike == null) {
      return res.status(404).json({ message: "cannot find bike" })
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
  res.bike = bike;
  next();
}

module.exports = router;