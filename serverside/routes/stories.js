const router = require("express").Router();
const User = require("../models/user.model");
const Story = require("../models/story.model");

// GET ALL STORIES THAT USER FOLLOWS
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const followings = user.followings;
    const followingStories = await Story.find({ userId: { $in: followings } });

    res.status(200).json(followingStories);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
