const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Scrap = sequelize.define('Scrap', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    assetId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    scrapDate: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'scraps'
  });

  return Scrap;
};
