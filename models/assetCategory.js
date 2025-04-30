const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const AssetCategory = sequelize.define('AssetCategory', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'asset_categories'
  });

  return AssetCategory;
};
