const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { auth, permit } = require("../middleware");

router.get("/", (req, res) => {
  res.send("Student router ");
});
router.post("/signup", [auth, permit([1])], async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash;
    req.body.role = "Student";
    req.body.loginType = 3;
    const user = new User(req.body);
    await user.save();
    res.status(200).json({ msg: "Accounted created successfully" });
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.status(400).json(" User not found ");
    }
    const match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
      const token = await jwt.sign(
        {
          userId: user._id,
          loginType: user.loginType,
        },
        process.env.SECRET_KEY
      );
      res.status(200).json({ token });
    } else {
      res.status(400).json("Wrong Password");
    }
  } catch (error) {}
});

module.exports = router;
