const express = require("express");
const artistRouter = require("./routes/artistRouter");
require("dotenv").config();
const app = express();

app.use(express.json());

app.use("/artists", artistRouter);

app.get("/artists", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
