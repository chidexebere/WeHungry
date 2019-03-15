"use strict";
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "Customer",
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      address: DataTypes.TEXT,
      phone_no: DataTypes.INTEGER
    },
    {}
  );
  Customer.associate = function(models) {
    Customer.belongsToMany(models.Caterer, {
      through: "Order",
      as: "caterers",
      foreignKey: "customer_id"
    });
    Customer.belongsToMany(models.Meal, {
      through: "Order",
      as: "meals",
      foreignKey: "customer_id"
    });
  };
  return Customer;
};
