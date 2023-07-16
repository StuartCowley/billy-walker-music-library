const express = require("express");
const router = express.Router();
const {
  createArtist,
  readArtist,
  getArtistById,
} = require("../controllers/artistController");

router.post("/", createArtist);

router.get("/", readArtist);

router.get("/:id", getArtistById);

module.exports = router;
