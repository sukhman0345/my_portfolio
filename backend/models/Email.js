const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  email: { type: String, required: true },
  subscribedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Email", emailSchema);


// This line creates a Mongoose model named Email.

// By default, Mongoose pluralizes this model name to create the collection name.

// So the model Email is automatically connected to the collection emails.

// ✅ This is where and how emails is used — behind the scenes.
