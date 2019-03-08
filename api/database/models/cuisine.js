"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cuisine = sequelize.define(
    "Cuisine",
    {
      cuisine_name: DataTypes.STRING
    },
    {}
  );
  Cuisine.associate = function(models) {
    Cuisine.belongsToMany(models.Caterer, {
      through: "Meal",
      as: "caterers",
      foreignKey: "cuisine_id"
    });
  };
  return Cuisine;
};
