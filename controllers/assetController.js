const { Asset, AssetCategory } = require('../models');
const { Op } = require('sequelize');

// List all assets with filters
exports.listAssets = async (req, res) => {
  try {
    const { search } = req.query;
    const where = {};

    if (search) {
      where[Op.or] = [
        { make: { [Op.iLike]: `%${search}%` } },
        { model: { [Op.iLike]: `%${search}%` } }
      ];
    }

    const assets = await Asset.findAll({
      where,
      include: [AssetCategory]
    });

    res.render('assets/list', { assets });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Show form to create asset
exports.showCreateForm = async (req, res) => {
  const categories = await AssetCategory.findAll();
  res.render('assets/form', { asset: {}, categories });
};

// Create new asset
exports.createAsset = async (req, res) => {
  try {
    await Asset.create(req.body);
    res.redirect('/assets');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Show form to edit asset
exports.showEditForm = async (req, res) => {
  try {
    const asset = await Asset.findByPk(req.params.id);
    const categories = await AssetCategory.findAll();
    res.render('assets/form', { asset, categories });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Update asset
exports.updateAsset = async (req, res) => {
  try {
    await Asset.update(req.body, { where: { id: req.params.id } });
    res.redirect('/assets');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
