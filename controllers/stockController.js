const { Asset } = require('../models');
const { Op } = require('sequelize');

// View available stock
exports.viewStock = async (req, res) => {
  try {
    // Get assets with status 'in_stock'
    const assets = await Asset.findAll({
      where: { status: 'in_stock' }
    });
    
    
    // Calculate total value of assets
    const totalValue = assets.reduce((acc, asset) => acc + (asset.value || 0), 0);

    // Group assets by branch
    const assetsByBranch = assets.reduce((acc, asset) => {
      acc.push([asset.branch,asset.value,asset.categoryId]);
      return acc;
    }, []);
    

    // Prepare data for rendering
    res.render('stock/list', { 
      assetsByBranch, 
      totalValue 
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
