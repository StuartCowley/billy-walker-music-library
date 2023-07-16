const express = require("express");
const router = express.Router();
const {
  createArtist,
  readArtist,
  getArtistById,
  replaceArtistById,
} = require("../controllers/artistController");

router.post("/", createArtist);

router.get("/", readArtist);

router.get("/:id", getArtistById);

router.put("/:id", replaceArtistById);

module.exports = router;
