module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Gordon James Ramsay',
        username: 'admin',
        password: '$2b$10$xu1ULdjBTppI0I5YVnDqGO7dmX8HmZ6xaPz862HA9bNQlow.FRDo.',
        role: 'admin',
        orders: [2],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sanji Vinsmoke',
        username: 'sanji97',
        password: '$2b$10$W6GPHyNMLBVH8vmwPszp4uDldT659QhgoqjZqyF0y/ZH9EYuBZBoS',
        role: 'waiter',
        orders: [1],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Julia Child',
        role: 'waiter',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ratatouille',
        role: 'waiter',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chester Cheetah',
        role: 'waiter',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Homer Simpson',
        role: 'waiter',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Gennadiy Bukin',
        role: 'waiter',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Molly Weasley',
        role: 'waiter',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Louis LeBouf',
        role: 'waiter',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ratched',
        role: 'waiter',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
