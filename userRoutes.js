const express = require("express");
const router = express.Router();
const User = require("../models/user");

// VISITOR ENTRY ROUTE
router.post("/login", async (req, res) => {
  console.log("LOGIN ROUTE HIT", req.body);

  const { name, occupation, reason } = req.body;

  if (!name || !occupation || !reason) {
    return res.status(400).json({
      error: "All fields required"
    });
  }

  let user = await User.findOne({ name });

  if (!user) {
    user = await User.create({ name, occupation, reason });
  }

  return res.status(200).json({ user });
});

module.exports = router;
