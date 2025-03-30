const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Connected to PostgreSQL successfully!"))
  .catch((err) => console.error("Unable to connect to PostgreSQL:", err));

module.exports = sequelize;
