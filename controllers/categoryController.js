const { AssetCategory } = require('../models');

// List all categories
exports.listCategories = async (req, res) => {
  try {
    const categories = await AssetCategory.findAll();
    res.render('categories/list', { categories });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Add new category
exports.createCategory = async (req, res) => {
  const categoryName=req.body.name;
  
  try {
    await AssetCategory.create({categoryName});
    res.redirect('/categories');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
