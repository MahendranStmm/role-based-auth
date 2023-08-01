const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  res.send("Admin router");
});

router.post("/signup", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;
    req.body.role = "Admin";
    req.body.loginType = 1;
    const user = new User(req.body);
    await user.save();
    res.status(200).json({ user });
  } catch (error) {
    console.log({ msg: error.msg });
  }
});

module.exports = router;
