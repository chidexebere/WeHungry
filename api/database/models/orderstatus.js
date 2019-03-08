"use strict";
module.exports = (sequelize, DataTypes) => {
  const OrderStatus = sequelize.define(
    "OrderStatus",
    {
      status: DataTypes.STRING
    },
    {}
  );
  OrderStatus.associate = function(models) {
    OrderStatus.belongsTo(models.Order, {
      foreignKey: "orderStatus_id"
    });
  };
  return OrderStatus;
};
