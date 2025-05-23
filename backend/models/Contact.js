const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  message: String,
});

module.exports = mongoose.model("Contact", ContactSchema);
