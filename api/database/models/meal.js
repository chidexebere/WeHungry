"use strict";
module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define(
    "Meal",
    {
      name: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      price: DataTypes.STRING,
      cuisine_id: DataTypes.INTEGER,
      caterer_id: DataTypes.INTEGER,
      available: DataTypes.BOOLEAN
    },
    {}
  );
  Meal.associate = function(models) {
    Meal.belongsToMany(models.Customer, {
      through: "Order",
      as: "customers",
      foreignKey: "meal_id"
    });
  };
  return Meal;
};
