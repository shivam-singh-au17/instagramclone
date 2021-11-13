const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, max: 30 },
    name: { type: String, required: true, max: 50 },
    email: { type: String, required: true, unique: true, max: 50 },
    password: { type: String, required: true, min: 6 },
    bio: { type: String, default: "", max: 150 },
    phoneNumber: { type: String },
    profilePicture: { type: String, default: "" },
    followers: { type: Array, default: [] },
    followings: { type: Array, default: [] },
    savedPosts: { type: Array, default: [] },
    taggedPosts: { type: Array, default: [] },
    likedPosts: { type: Array, default: [] },
    stories: { type: Array, default: [] },
    isVerified: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
