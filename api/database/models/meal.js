"use strict";
module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define(
    "Meal",
    {
      name: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      price: DataTypes.STRING,
      cuisine_id: DataTypes.INTEGER,
      caterer_id: DataTypes.INTEGER
    },
    {}
  );
  Meal.associate = function(models) {
    Meal.belongsToMany(models.Customer, {
      through: "Order",
      as: "customers",
      foreignKey: "meal_id"
    });

    Meal.belongsTo(models.Menu, {
      foreignKey: "meal_id"
    });
  };
  return Meal;
};
