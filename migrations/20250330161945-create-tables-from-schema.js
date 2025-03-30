"use strict";
const fs = require("fs");
const path = require("path");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const filePath = path.join(__dirname, "schema.sql");
    const sql = fs.readFileSync(filePath, { encoding: "utf-8" });

    return queryInterface.sequelize.query(sql);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("vehicle_locations");
    await queryInterface.dropTable("vehicle_status");
    await queryInterface.dropTable("vehicles");
  },
};
