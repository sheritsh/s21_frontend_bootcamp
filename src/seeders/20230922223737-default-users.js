module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Sanji Vinsmoke',
        orders: [1],
        role: 'First mate',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Gordon James Ramsay',
        orders: [2],
        role: 'Chief',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
