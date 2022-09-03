const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: String,
    reuire: true,
  },
  name: {
    type: String,
    reuire: true,
  },
  gender: {
    type: String,
    reuire: true,
  },
  contact: {
    type: String,
    reuire: true,
  },
  address: {
    type: String,
    reuire: true,
  },
  photoUrl: {
    type: String,
    reuire: true,
  },
  // age: {
  //   type: Number,
  //   reuire: true,
  // },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});








module.exports = mongoose.model("User", userSchema);
