require('dotenv').config;
const config = {}

config.port = 8080;
config.hostname = "192.168.33.10";
config.db = process.env.DB_URI;

module.exports = config;