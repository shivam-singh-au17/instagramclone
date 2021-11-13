const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let signupSchema = new Schema(
    {
        userEmail: { type: String },
        userName: { type: String },
        userUserName: { type: String },
        userPassword: { type: String },
    },
    { timestamps: true }
);

let Signup = mongoose.model("signupData", signupSchema);

module.exports = Signup;
