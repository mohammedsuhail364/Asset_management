const express = require('express');
const router = express.Router();
const returnController = require('../controllers/returnController');

router.get('/', returnController.listReturns);   // List returned assets
router.get('/create', returnController.showReturnForm);   // Show return form
router.post('/create', returnController.returnAsset);   // Handle asset return

module.exports = router;
