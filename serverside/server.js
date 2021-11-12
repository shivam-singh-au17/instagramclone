require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3030

const connect = require("./src/config/db");

const postcontroller = require("./src/controllers/posts.controlers");
const usercontroller = require("./src/controllers/user.controller");

app.use(cors());
app.use(express.json());

app.use(postcontroller);
app.use(usercontroller);

app.listen(port, async () => {

  await connect();
  console.log("Listening on post " + port);

})


module.exports = app;

