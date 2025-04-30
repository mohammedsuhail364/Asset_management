const express = require("express");
const router = express.Router();
const scrapController = require("../controllers/scrapController");

// List all scraps
router.get("/", scrapController.listScraps);

// Show create scrap form
router.get("/create", scrapController.showScrapForm);

// Handle scrap creation
router.post("/create", scrapController.scrapAsset);

module.exports = router;
