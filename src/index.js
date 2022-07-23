const express = require("express");
const bodyParser = require("body-parser");
const mongoose  = require("mongoose");
const dotenv  = require("dotenv");

const route = require("./routes/route.js");
const app = express();

dotenv.config({path : './config.env'});

app.use(bodyParser.json()); // tells the system that you want json to be used

// mongoDb connection
mongoose
  .connect(
    process.env.DB_CON, {useNewUrlParser: true})
  .then(() => console.log("MongoDb connected ✔ "))
  .catch((err) => console.log(err));

// Initial route
app.use("/", route);

// port
app.listen(process.env.PORT, function () {
  console.log("Express app running on port 🎧 " + (process.env.PORT));
});