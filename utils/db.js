const mongoose = require('mongoose');
const config = require('../config');

require('dotenv').config;
async function open(){
  // check for test environment
  if(process.env.NODE_ENV === 'test'){
    const {MongoMemoryServer}  = require('mongodb-memory-server-core');

    
    try {
      const mongoServer = await MongoMemoryServer.create();
      const uri = mongoServer.getUri();
      await mongoose.connect(uri);
    } catch (err){
      throw err;
    }
  } else {
    try {
      return await mongoose.connect(config.db);
    } catch (error) {
      throw error;
    }
    
  }
    
}

async function close(){
    await mongoose.connection.close();
}

module.exports = {open, close};