const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.listCategories);
router.post('/create', categoryController.createCategory);

module.exports = router;
