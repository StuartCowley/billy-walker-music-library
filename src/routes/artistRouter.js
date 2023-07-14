const express = require("express");
const router = express.Router();
const { createArtist, readArtist } = require("../controllers/artistController");

router.post("/", createArtist);

router.get("/", readArtist);

module.exports = router;
