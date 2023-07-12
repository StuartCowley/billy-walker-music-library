// const app = require("../app");

// app.post("/artists", (req, res) => {
//   res.status(201).send("Success");
// });

// class ArtistController {
//   getAllArtists(req, res) {
//     // logic
//   }
//   createArtist(req, res) {
//     Artist.create(req.body)
//   }
//   getArtistById(req, res) {
//     // logic
//   }
//   updateArtist(req, res) {
//     // logic
//   }
//   deleteArtist(req, res) {
//     // logic
//   }
// }

const createArtist = (req, res) => {
  res.status(201).json({ message: "Artist created successfully" });
};

module.exports = { createArtist };
