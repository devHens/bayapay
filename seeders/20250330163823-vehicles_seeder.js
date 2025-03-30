"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "vehicle_status",
      [
        {
          vehicle_id: 132456,
          lock_status: true,
          current_speed: 0,
          battery_level: 100,
          status: "PARKING",
          last_updated: new Date(),
        },
        {
          vehicle_id: 987654,
          lock_status: false,
          current_speed: 5,
          battery_level: 75,
          status: "MOVING",
          last_updated: new Date(),
        },
        {
          vehicle_id: 569825,
          lock_status: false,
          current_speed: 0,
          battery_level: 50,
          status: "IDLING",
          last_updated: new Date(),
        },
        {
          vehicle_id: 125864,
          lock_status: true,
          current_speed: 0,
          battery_level: 15,
          status: "TOWING",
          last_updated: new Date(),
        },
        {
          vehicle_id: 125864,
          lock_status: true,
          current_speed: 0,
          battery_level: 0,
          status: "TOWING",
          last_updated: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("vehicle_status", null, {});
  },
};
