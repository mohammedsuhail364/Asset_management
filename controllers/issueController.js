const { Issue, Asset, Employee } = require('../models');

// Show issue asset form
exports.showIssueForm = async (req, res) => {
  try {
    const assets = await Asset.findAll({ where: { status: 'in_stock' } });
    
    const employees = await Employee.findAll();
    
    
    res.render('issues/form', { assets, employees, issue: {} }); // ensure `issue` is defined
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Issue asset
exports.issueAsset = async (req, res) => {
  try {
    const { employeeId, assetId } = req.body;

    // 1. Create an issue record
    await Issue.create({ employeeId, assetId });

    // 2. Update asset status to issued
    await Asset.update({ status: 'issued' }, { where: { id: assetId } });

    res.redirect('/issue');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// List all issued assets
exports.listIssuedAssets = async (req, res) => {
  try {
    const issues = await Issue.findAll({
      include: [Asset, Employee]
    });
    res.render('issues/list', { issues }); // Renders list view
  } catch (error) {
    res.status(500).send(error.message);
  }
};
