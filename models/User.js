const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    loginType: {
      type: String,
      required: true,
    }, //1.Admin 2.Professor 3.Student
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

module.exports = User;
