const express = require("express");
const app = express();
const artistRouter = require("./routes/artistRouter");

app.use(express.json());
app.use("/artists", artistRouter);

module.exports = app;
