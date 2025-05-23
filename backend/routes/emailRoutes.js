const express = require("express");
const router = express.Router();
const Email = require("../models/Email");

// @route   POST /api/email
// @desc    Save subscriber email
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    const newEmail = new Email({ email });
    await newEmail.save();
    res.status(201).json({ message: "Subscribed successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Failed to subscribe. Please try again later." });
  }
});

module.exports = router;
