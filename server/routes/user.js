const express = require("express");
const router = express.Router();
const User = require("../models/user");

// GET all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send("Error: " + error);
  }
});

// GET a user by username
router.get("/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.json(user);
  } catch (error) {
    res.status(500).send("Error: " + error);
  }
});

// POST a new user
router.post("/", async (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send("Error: " + error);
  }
});

// PATCH/update a user by username
router.patch("/:username", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { username: req.params.username },
      { $set: req.body },
      { new: true }
    );
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.json(user);
  } catch (error) {
    res.status(500).send("Error: " + error);
  }
});

// DELETE a user by username
router.delete("/:username", async (req, res) => {
  try {
    const deletedUser = await User.findOneAndDelete({
      username: req.params.username,
    });
    if (!deletedUser) {
      return res.status(404).send("User not found");
    }
    res.json(deletedUser);
  } catch (error) {
    res.status(500).send("Error: " + error);
  }
});

module.exports = router;
