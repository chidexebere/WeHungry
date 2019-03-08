"use strict";
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      customer_id: DataTypes.INTEGER,
      caterer_id: DataTypes.INTEGER,
      meal_id: DataTypes.INTEGER,
      orderStatus_id: DataTypes.STRING,
      quantity: DataTypes.STRING,
      delivery_cost: DataTypes.STRING,
      total_cost: DataTypes.STRING
    },
    {}
  );
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};
