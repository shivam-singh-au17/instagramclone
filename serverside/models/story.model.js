const mongoose = require("mongoose");

const storySchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    image: { type: String, required: true },
    // images: { type: Array, default: [], required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("story", storySchema);
