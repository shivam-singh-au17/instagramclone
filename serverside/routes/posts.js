const router = require("express").Router();
const User = require("../models/user.model");
const Post = require("../models/post.model");

// GET A POST
router.get("/:id", async (req, res) => {
  try {
    // find the post with id
    const post = await Post.findById(req.params.id);

    res.status(200).json(post);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// CREATE A POST
router.post("/", async (req, res) => {
  const newPost = await Post(req.body);
  try {
    // find the user with id
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE A POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post updated");
    } else {
      res.status(403).json("you can't update another users post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE A POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("Post deleted");
    } else {
      res.status(403).json("you can't delete another users post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// LIKE A POST
// UNLIKE A POST
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const currentUser = await User.findById(req.body.userId);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      await currentUser.updateOne({ $push: { likedPosts: post._id } });
      res.status(200).json("Post liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      await currentUser.updateOne({ $pull: { likedPosts: post._id } });
      res.status(200).json("Post unliked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL POSTS BY A USER
router.get("/user/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const userPosts = await Post.find({ userId: user._id });

    res.status(200).json(userPosts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL POST THAT A USER FOLLOWS
router.get("/timeline/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const followings = user.followings;
    const followingPosts = await Post.find({ userId: { $in: followings } });

    res.status(200).json(followingPosts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
