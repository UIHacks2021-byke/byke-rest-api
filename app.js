// import packages
const express = require("express");
const cors = require("cors");
require("dotenv/config");

// create an instance of express
const app = express();

// import routers
const usersRoute = require("./routers/users");
const bicycleRoute = require("./routers/bicycles");
// middlewares
app.use(cors());
app.use(express.json());
app.use("/users", usersRoute);
app.use("/bicycles", bicycleRoute);


module.exports = app;

