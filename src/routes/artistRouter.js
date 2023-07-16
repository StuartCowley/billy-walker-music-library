const express = require("express");
const router = express.Router();
const {
  createArtist,
  readArtist,
  getArtistById,
  updateArtist,
  deleteArtist,
} = require("../controllers/artistController");

router.post("/", createArtist);

router.get("/", readArtist);

router.get("/:id", getArtistById);

router.put("/:id", updateArtist);

router.delete("/:id", deleteArtist);

module.exports = router;
