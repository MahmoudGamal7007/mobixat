"use strict";

const AvailableSpecsSeed = require("../libs/objects/seeds/available_specs_seed.lib");
const createAbsoluteName = require("../libs/functions/create-absolute-spec-name");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "available_specs",
      AvailableSpecsSeed.map(function (item) {
        item.absolute_spec_name = createAbsoluteName(item.en_spec_name);
        return item;
      })
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
