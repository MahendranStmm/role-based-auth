const router = require("express").Router();
const { auth, permit } = require("../middleware");

router.get("/", (req, res) => {
  res.send("Syllabus router");
});

router.get("/getsyllabus", [auth, permit([1, 2, 3])], async (req, res) => {
  try {
    res.status(200).json({ msg: "Get Syllabus" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
