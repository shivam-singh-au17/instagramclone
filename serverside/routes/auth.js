const router = require("express").Router();
const User = require("../models/user.model");

// LOGIN
router.post("/login", async (req, res) => {
  try {
    // find user with the provided email
    const user = await User.findOne({ email: req.body.email });

    // if user is not found return 404
    !user && res.status(404).json("User does not exist");

    if (user.password === req.body.password) {
      res.status(200).json(user);
    } else {
      res.status(404).json("Incorrect password");
    }
  } catch (err) {
    res.status(500).json(err);
  }

  new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

// REGISTER
router.post("/register", async (req, res) => {
  const newUser = await new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
