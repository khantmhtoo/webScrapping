const express = require("express");
const router = express.Router();
const scrapController = require("../controllers/scrapController");

// Default
router.get("/", (req, res) => {
  const welcomeMsg = "Welcome";
  res.send(welcomeMsg);
});

// Get A Scrap
router.post("/", scrapController.scrap);

module.exports = router;
