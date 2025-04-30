const { Sequelize } = require("sequelize");
const { sequelize } = require("../config/database");

const Employee = require("./employee")(sequelize);
const Asset = require("./asset")(sequelize);
const AssetCategory = require("./assetCategory")(sequelize);
const Issue = require("./issue")(sequelize);
const Return = require("./return")(sequelize);
const Scrap = require("./scrap")(sequelize);

// Relations
Asset.belongsTo(AssetCategory, { foreignKey: 'categoryId'});
Issue.belongsTo(Employee, { foreignKey: "employeeId"  });
Issue.belongsTo(Asset, { foreignKey: "assetId"});
Return.belongsTo(Asset, { foreignKey: "assetId" });
Scrap.belongsTo(Asset, { foreignKey: "assetId" });

module.exports = {
  sequelize,
  Employee,
  Asset,
  AssetCategory,
  Issue,
  Return,
  Scrap,
};
