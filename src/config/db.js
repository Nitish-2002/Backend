const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Create Sequelize instance
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_NAME,
  logging: false,
});

// Test Database Connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database Initialized Successfully!!');
  } catch (error) {
    console.log('Unable to connect to the database. Error:', error);
  }
}
testConnection();

module.exports = sequelize;
