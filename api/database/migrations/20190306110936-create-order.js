"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      customer_id: {
        type: Sequelize.INTEGER
      },
      caterer_id: {
        type: Sequelize.INTEGER
      },
      meal_id: {
        type: Sequelize.INTEGER
      },
      orderStatus_id: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.STRING
      },
      delivery_cost: {
        type: Sequelize.STRING
      },
      total_cost: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Orders");
  }
};
