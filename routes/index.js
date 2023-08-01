const router = require("express").Router();
const adminRouter = require("./admin");
const studentRouter = require("./student");
const mentorRouter = require("./mentor");
const syllabusRouter = require("./syllabus");

router.use("/admin", adminRouter);
router.use("/student", studentRouter);
router.use("/mentor", mentorRouter);
router.use("/syllabus", syllabusRouter);

module.exports = router;
