const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Return = sequelize.define('Return', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    reason: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'returns'
  });

  // Defining associations
  Return.associate = (models) => {
    Return.belongsTo(models.Asset, {
      foreignKey: 'assetId',
      as: 'Asset'
    });
    Return.belongsTo(models.Employee, {
      foreignKey: 'employeeId',
      as: 'Employee'  // This associates the Employee with the return record
    });
  };

  return Return;
};
