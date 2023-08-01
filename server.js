const express = require("express");
const app = express();
require("dotenv").config();
const connectedDB = require("./config/db");
const apiRouter = require("./routes");

connectedDB();
app.use(express.json());
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("my server");
});

app.listen(process.env.PORT || 4000, async (req, res) => {
  console.log("Server is running ");
});
