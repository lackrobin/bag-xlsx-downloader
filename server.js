const { downloadAndParse } = require("./util/downloadAndParse");
const express = require("express");
const  schedule =  require('node-schedule');

const app = express();
let portSwitch = 3000;
process.argv.forEach(function (val, index, array) {
  if(index===2 && val==="prod"){
    portSwitch = 80;
  }
});
const port = process.env.PORT || portSwitch;


app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  
  
  
app.get("/download", (req, res) => {
  downloadAndParse();
  return "[]";
});

app.listen(port, () => console.log(`BAG COVID API listening on port ${port}!`));


schedule.scheduleJob('0 13 * * *', downloadAndParse);

schedule.scheduleJob('0 18 * * *', downloadAndParse);