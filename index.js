const app = require("./app");
const config = require("./config")
const conn = require('./utils/db');

conn.open().then(()=>{
  app.listen(config.port, ()=>{
    console.log(`app listening on http//:localhost${config.port}`)
  })
})