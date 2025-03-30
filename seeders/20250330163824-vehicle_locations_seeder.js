"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "vehicle_locations",
      [
        {
          vehicle_id: 132456,
          latitude: 3.142,
          longitude: 0.12,
          last_updated: new Date(),
        },
        {
          vehicle_id: 987654,
          latitude: 2.125,
          longitude: 1.14,
          last_updated: new Date(),
        },
        {
          vehicle_id: 569825,
          latitude: 4.125,
          longitude: 1.14,
          last_updated: new Date(),
        },
        {
          vehicle_id: 125864,
          latitude: 5.125,
          longitude: 1.14,
          last_updated: new Date(),
        },
        {
          vehicle_id: 125864,
          latitude: 5.125,
          longitude: 1.14,
          last_updated: new Date(),
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("vehicle_locations", null, {});
  },
};
