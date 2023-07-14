const express = require("express");
const router = express.Router();
const { createArtist } = require("../controllers/artistController");

router.post("/", createArtist);

module.exports = router;
