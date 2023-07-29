const db = require("../../db/index");

const createAlbum = async (req, res) => {
  const { name, year } = req.body;
  const { artist_id } = req.params;

  try {
    const {
      rows: [album],
    } = await db.query(
      `INSERT INTO Albums (name, year, artistid) VALUES ($1, $2, $3) RETURNING *`,
      [name, year, artist_id]
    );
    res.status(201).json(album);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const readAlbum = async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM Albums");
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = {
  createAlbum,
  readAlbum,
};
