const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();



router.get("/getData",(req, res)=>{
    res.json({text : 123})
});

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });


app.use("/api", router);
app.listen(3001);