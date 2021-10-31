require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);


const port = process.env.PORT || 5000

const connect = require("./src/config/db");

const postcontroller = require("./src/controllers/posts.controlers");

app.use(logger("dev"));

const dbUrl = connect.dbUrl;

var options = {
  keepAlive: 1,
  connectTimeoutMS: 30000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(dbUrl, options, (err) => {

  if (err) {
    console.log("ERROR", err);
  }

});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", postcontroller);

app.listen(port, function () {

  console.log("Listening on post " + port);

});

module.exports = app;
