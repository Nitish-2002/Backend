// src/models/login.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Import sequelize instance

// Define the User model
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
