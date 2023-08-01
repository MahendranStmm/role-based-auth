const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { auth, permit } = require("../middleware");

router.get("/", (req, res) => {
  res.send("Mentor router");
});

router.post("/signup", [auth, permit([1])], async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash;
    req.body.role = "Professor";
    req.body.loginType = 2;
    const user = new User(req.body);
    await user.save();
    res.status(200).json({ msg: "Accounted created successfully" });
  } catch (error) {
    console.log(error);
  }
});

router.get("/getstudents", [auth, permit([1, 2])], async (req, res) => {
  try {
    const users = await User.find({ loginType: 3 }).select("name email");
    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
