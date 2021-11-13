const router = require("express").Router();
const User = require("../models/user.model");
const Post = require("../models/post.model");

// GET A USER
router.get("/:id", async (req, res) => {
  try {
    // find the user with id
    const user = await User.findById(req.params.id);

    // send everything except the password
    const { password, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// UPDATE USER
router.put("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("Updated");
  } catch (err) {
    return res.status(500).json(err);
  }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Account deleted");
  } catch (err) {
    return res.status(500).json(err);
  }
});

// FOLLOW A USER
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      // find the user with id
      const user = await User.findById(req.params.id);

      // current user id
      const currentUser = await User.findById(req.body.userId);

      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json("user followed");
      } else {
        res.status(403).json("you are already following this user");
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    res.status(500).json(err);
  }
});

// UNFOLLOW A USER
router.put("/:id/unfollow", async (req, res) => {
  try {
    // find the user with id
    const user = await User.findById(req.params.id);

    // current user id
    const currentUser = await User.findById(req.body.userId);

    if (user.followers.includes(req.body.userId)) {
      await user.updateOne({ $pull: { followers: req.body.userId } });
      await currentUser.updateOne({ $pull: { followings: req.params.id } });
      res.status(200).json("user unfollowed");
    } else {
      res.status(403).json("you not following this user");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

// SAVE A POST
router.put("/save/:id", async (req, res) => {
  try {
    // current user id
    const currentUser = await User.findById(req.body.userId);

    if (!currentUser.savedPosts.includes(req.params.id)) {
      await currentUser.updateOne({ $push: { savedPosts: req.params.id } });
      res.status(200).json("post saved");
    } else {
      await currentUser.updateOne({ $pull: { savedPosts: req.params.id } });
      res.status(200).json("post unsaved");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

// GET ALL SAVED POST
router.get("/:id/saved", async (req, res) => {
  try {
    // find the user with id
    const currentUser = await User.findById(req.params.id);
    const savedPost = currentUser.savedPosts;

    const result = await Post.find({ _id: { $in: savedPost } });
    console.log("result: ", result);
    res.status(200).json(result);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// GET ALL FOLLOWERS OF A USER
router.get("/:id/followers", async (req, res) => {
  try {
    // find the user with id
    const currentUser = await User.findById(req.params.id);
    const followerIds = currentUser.followers;

    const result = await User.find({ _id: { $in: followerIds } });
    res.status(200).json(result);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// GET ALL FOLLOWINGS OF A USER
router.get("/:id/followings", async (req, res) => {
  try {
    // find the user with id
    const currentUser = await User.findById(req.params.id);
    const followingIds = currentUser.followings;

    const result = await User.find({ _id: { $in: followingIds } });
    res.status(200).json(result);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
