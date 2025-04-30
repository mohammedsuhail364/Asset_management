const { Return, Asset, Employee, Issue } = require("../models");

// Show return form
// Show return form
exports.showReturnForm = async (req, res) => {
  try {
    // Fetch issues and employees
    const issues = await Issue.findAll({
      include: [Asset, Employee],
    });
    // console.log(issues);

    const employees = await Employee.findAll(); // Fetch active employees

    res.render("returns/form", { issues, employees });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Return asset
exports.returnAsset = async (req, res) => {
  try {
    const { assetId, reason, employeeId } = req.body;

    // 1. Create a return record with associated employee
    await Return.create({
      assetId,
      reason,
      employeeId, // Store the employeeId when returning the asset
    });

    // 2. Update asset status to 'in_stock' indicating the asset is returned
    await Asset.update({ status: "in_stock" }, { where: { id: assetId } });

    // 3. Optionally remove the issue record (optional step)
    await Issue.destroy({ where: { assetId } });

    // Redirect back to the list of returned assets
    res.redirect("/return");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// List all returned assets
exports.listReturns = async (req, res) => {
  try {
    // Fetch all return records and include associated assets and employees
    const returns = await Return.findAll({
      include: [{ model: Asset }],
    });
    res.render("returns/list", { returns });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
