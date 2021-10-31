require("dotenv").config();

const db = process.env.DB_URL

let connect = {
    dbUrl: db
};

module.exports = connect;



