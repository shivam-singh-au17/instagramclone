const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let postSchema = new Schema(
  {
    userPostPicVideo: { type: Array },
    userVideosViews: { type: Number },
    userPostLikedCount: { type: Number },
    userPostCommentsCount: { type: String },
    userPostDeseription: { type: String },
  },
  { timestamps: true }
);

let Post = mongoose.model("allUser", postSchema);

module.exports = Post;
