const express = require("express");
const app = express();
const artistRouter = require("./routes/artistRouter");
const albumRouter = require("./routes/albumRouter");

app.use(express.json());
app.use("/artists", artistRouter);
app.use("/artists/:id/albums", albumRouter);

module.exports = app;
