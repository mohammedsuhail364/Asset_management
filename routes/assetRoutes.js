const express = require('express');
const router = express.Router();
const assetController = require('../controllers/assetController');

router.get('/', assetController.listAssets);
router.get('/create', assetController.showCreateForm);
router.post('/create', assetController.createAsset);
router.get('/edit/:id', assetController.showEditForm);
router.post('/edit/:id', assetController.updateAsset);

module.exports = router;
