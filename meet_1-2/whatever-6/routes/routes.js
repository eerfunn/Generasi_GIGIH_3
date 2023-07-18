const express = require("express");
const {
  getAllSongs,
  getSongById,
  addSong,
  deleteSong,
  updateSong,
} = require("../controllers/MusicController");

const router = express.Router();

//Music Router
router.get(getAllSongs);
router.get(getSongById);

router.post(addSong);
router.delete(deleteSong);

router.put(updateSong);

module.exports = router;
