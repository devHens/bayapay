"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "vehicles",
      [
        { id: 132456, type: "Scooter", created_at: new Date() },
        { id: 987654, type: "Scooter", created_at: new Date() },
        { id: 569825, type: "Scooter", created_at: new Date() },
        { id: 125864, type: "Scooter", created_at: new Date() },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("vehicles", null, {});
  },
};
