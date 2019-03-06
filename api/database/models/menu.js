'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    meals: DataTypes.JSON
  }, {});
  Menu.associate = function(models) {
    // associations can be defined here
  };
  return Menu;
};