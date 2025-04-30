const { Employee } = require('../models');

// List all employees with optional filter
exports.listEmployees = async (req, res) => {
  try {
    const { status, search } = req.query;
    const where = {};

    if (status) where.status = status;
    if (search) where.name = { [Op.iLike]: `%${search}%` };

    const employees = await Employee.findAll({ where });
    res.render('employees/list', { employees });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Show form to create employee
exports.showCreateForm = (req, res) => {
  res.render('employees/form', { employee: {} });
};

// Create new employee
exports.createEmployee = async (req, res) => {
  try {
    await Employee.create(req.body);
    res.redirect('/employees');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Show form to edit employee
exports.showEditForm = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    res.render('employees/form', { employee });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Update employee
exports.updateEmployee = async (req, res) => {
  try {
    await Employee.update(req.body, {
      where: { id: req.params.id }
    });
    res.redirect('/employees');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
