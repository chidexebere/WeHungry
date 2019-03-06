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
    // associations can be defined here
  };
  return Caterer;
};
