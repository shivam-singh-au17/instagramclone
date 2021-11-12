require("dotenv").config();
const mongoose = require("mongoose");


// const db = process.env.DB_URL
const db = "mongodb+srv://Shivammz20:Shivam@mz20@cluster0.fhq73.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connect = () => {

    return mongoose.connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false

    }, (err) => {

        if (err) {
            console.log("ERROR", err);
        }

    });
}


module.exports = connect;


