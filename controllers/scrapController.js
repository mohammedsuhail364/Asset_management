const { Scrap, Asset, Employee, Issue } = require("../models");
const { Op } = require("sequelize");

// Show scrap form with only non-scrapped, non-issued assets
exports.showScrapForm = async (req, res) => {
  try {
    const assets = await Asset.findAll({
      where: {
        status: {
          [Op.notIn]: ["scrapped"],
        },
      },
    });
    res.render("scraps/form", { assets });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Handle scrap creation
exports.scrapAsset = async (req, res) => {
  try {
    const { assetId, notes } = req.body;

    // Create Scrap Record
    await Scrap.create({ assetId, notes });

    // Update asset status to scrapped
    await Asset.update({ status: "scrapped" }, { where: { id: assetId } });

    // Remove from issued assets if any
    await Issue.destroy({ where: { assetId } });

    res.redirect("/scraps");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// List all scrapped assets
exports.listScraps = async (req, res) => {
  try {
    const scraps = await Scrap.findAll({
      include: [
        {
          model: Asset,
        },
      ],
    });

    res.render("scraps/list", { scraps });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
