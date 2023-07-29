const express = require("express");
const router = express.Router();
const { createAlbum, readAlbum } = require("../controllers/albumController");

router.post("/", createAlbum);

router.get("/", readAlbum);

module.exports = router;
