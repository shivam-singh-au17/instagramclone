const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema(
    {
        userName: { type: String },
        userGender: { type: String },
        userMobaile: { type: String },
        userEmail: { type: String },
        userUserName: { type: String },
        userProPic: { type: String },
        userBio: { type: String },
        userFollowersCount: { type: Number },
        userAllFollowers: { type: Array },
        userAllFollowersName: { type: Array },
        userAllFollowersPic: { type: Array },
        userPostsCount: { type: Number },
        userFollowingCount: { type: Number },
        userAllFollowing: { type: Array },
        userAllFollowingName: { type: Array },
        userAllFollowingPic: { type: Array },
        userStatusPic: { type: Array },
        userAllStatusPic: { type: Array },
        userAllPost: { type: Array },
        userVideos: { type: Array },
        userTaggedItem: { type: Array },
        userSavedItem: { type: Array }
    },
    { timestamps: true }
);

let User = mongoose.model("user", userSchema);

module.exports = User;