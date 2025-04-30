const express = require('express');
const router = express.Router();
const historyController = require('../controllers/historyController');

router.get('/:assetId', historyController.viewAssetHistory);

module.exports = router;
