module.exports = {
  up: async (queryInterface, Sequelize) => {
    const orders = await queryInterface.sequelize.query(
      'SELECT id FROM "Orders";',
    );

    const orderRows = orders[0];

    await queryInterface.bulkInsert('MenuItems', [
      {
        OrderId: orderRows[0].id,
        title: 'Lasagna',
        picture: 'lasagna.jpg',
        cost: 12,
        callQuantity: 5,
        description: 'Lasagna is an Italian pasta dish with layers of noodles, rich meat sauce, creamy béchamel, and melted cheese, baked to perfection.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: orderRows[1].id,
        title: 'Salmon Sushi',
        picture: 'salmon_sushi.jpg',
        cost: 21,
        callQuantity: 9,
        description: 'Salmon sushi is a Japanese delicacy featuring fresh, raw salmon atop vinegared rice, wrapped in seaweed, and served with soy sauce and wasabi.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('MenuItems', null, {});
  },
};
