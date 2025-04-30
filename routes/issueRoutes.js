const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issueController');

router.get('/', issueController.listIssuedAssets);
router.get('/create', issueController.showIssueForm);
router.post('/create', issueController.issueAsset);

module.exports = router;
