"use strict";
module.exports = (sequelize, DataTypes) => {
  const Caterer = sequelize.define(
    "Caterer",
    {
      restaurant_name: DataTypes.STRING,
      address: DataTypes.TEXT,
      phone_no: DataTypes.INTEGER,
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING
    },
    {}
  );
  Caterer.associate = function(models) {
    Caterer.belongsToMany(models.Customer, {
      through: "Order",
      as: "customers",
      foreignKey: "caterer_id"
    });
    Caterer.belongsToMany(models.Cuisine, {
      through: "Meal",
      as: "cuisines",
      foreignKey: "caterer_id"
    });
  };
  return Caterer;
};
