const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    images: { type: Array, default: [], required: true },
    description: { type: String, max: 2200 },
    likes: { type: Array, default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("post", postSchema);
