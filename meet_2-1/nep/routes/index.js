const express = require("express");
const { getThing, getAllThings } = require("../controller/ThingController");

const router = express.Router();

// Router
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to home",
    status: 200,
  });
});
router.get("/thing", getThing);
router.get("/allthings", getAllThings);

module.exports = router;
