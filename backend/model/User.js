const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 1,
    max: 100,
  },
  email: {
    type: String,
    required: true,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 2000,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
