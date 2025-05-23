const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// POST: Save form data
router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: " Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: " Error saving data" });
  }
});

module.exports = router;
