const { Asset, Issue, Return, Scrap, Employee } = require("../models");

// View complete asset history
exports.viewAssetHistory = async (req, res) => {
  try {
    const { assetId } = req.params;

    const asset = await Asset.findByPk(assetId);
    const issues = await Issue.findAll({
      where: { assetId },
      include: [Employee],
    });
    const returns = await Return.findAll({ where: { assetId } });
    const scraps = await Scrap.findAll({ where: { assetId } });
    


    res.render("history/list", {
      asset,
      issues,
      returns,
      scraps,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
