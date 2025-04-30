const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/', employeeController.listEmployees);
router.get('/create', employeeController.showCreateForm);
router.post('/create', employeeController.createEmployee);
router.get('/edit/:id', employeeController.showEditForm);
router.post('/edit/:id', employeeController.updateEmployee);

module.exports = router;
