require('dotenv').config;
const config = {}

config.port = 8080;
config.hostname = "127.0.0.1";
config.db = process.env.DB_URI;

module.exports = config;