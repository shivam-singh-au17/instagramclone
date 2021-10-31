require("dotenv").config();

const express = require("express");

const connect = require("./src/configs/db");

const userController = require("./src/controller/user.controller")


const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use("/", userController);

app.listen(PORT, async () => {

    await connect();
    console.log(`Listening on port ${PORT}`);

})


