const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Issue = sequelize.define('Issue', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    employeeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    assetId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    issueDate: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'issues'
  });

  return Issue;
};
