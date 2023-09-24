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
        cost: 520,
        callQuantity: 456,
        description: 'Lasagna is an Italian pasta dish with layers of noodles, rich meat sauce, creamy béchamel, and melted cheese, baked to perfection.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: orderRows[1].id,
        title: 'Salmon Sushi',
        picture: 'salmon_sushi.jpg',
        cost: 658,
        callQuantity: 182,
        description: 'Salmon sushi is a Japanese delicacy featuring fresh, raw salmon atop vinegared rice, wrapped in seaweed, and served with soy sauce and wasabi.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: orderRows[0].id,
        title: 'Chicken Caesar Salad',
        picture: 'chicken_caesar_salad.jpg',
        cost: 245,
        callQuantity: 193,
        description: 'A classic blend of tender grilled chicken, crisp romaine lettuce, savory croutons, and creamy Caesar dressing. Delightfully flavorful and satisfying.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: orderRows[1].id,
        title: 'Margherita Pizza',
        picture: 'margherita_pizza.jpg',
        cost: 409,
        callQuantity: 952,
        description: 'A timeless Italian classic, this pizza features a thin crust, rich tomato sauce, fresh mozzarella, aromatic basil, and a drizzle of olive oil. Simple, yet bursting with flavor.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: orderRows[0].id,
        title: 'Carbonara Pasta',
        picture: 'carbonara_pasta.jpg',
        cost: 419,
        callQuantity: 249,
        description: 'Indulge in the creamy perfection of this Italian favorite. Al dente spaghetti, rich egg-based sauce, crispy pancetta, and grated Pecorino Romano cheese combine for a heavenly taste experience.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: orderRows[1].id,
        title: 'Mushroom Risotto',
        picture: 'mushroom_risotto.jpg',
        cost: 375,
        callQuantity: 340,
        description: 'Mushroom Risotto: A comforting dish with creamy Arborio rice, sautéed mushrooms, fragrant onions, and a hint of Parmesan. A savory and satisfying Italian classic.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('MenuItems', null, {});
  },
};
