const sequelize = require('../config/db'); // Import the singleton sequelize instance
const User = require('./login'); // Import your models

// Export sequelize and models
module.exports = {
    sequelize, // Already declared and imported, don't redeclare
    User,
  };
