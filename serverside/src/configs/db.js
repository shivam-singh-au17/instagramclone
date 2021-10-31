require("dotenv").config();
const mongoose = require("mongoose");

const DB = process.env.DB_URL

const connect = () => {
    return mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('Connected To DataBase')
        })
        .catch((err) => {
            console.error(`Error Connecting To The DataBase. \n${err}`);
        })
}


module.exports = connect;


