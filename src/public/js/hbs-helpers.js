const { User } = require('../../models/index');

function ifEquals(arg1, arg2, options) {
  return arg1 === arg2 ? options.fn(this) : options.inverse(this);
}

function mapItemsToNames(items) {
  return items.map((item) => {
    switch (item) {
      case 1: return 'Lasagna';
      case 2: return 'Salmon Sushi';
      case 3: return 'Chicken Caesar Salad';
      case 4: return 'Margherita Pizza';
      case 5: return 'Carbonara Pasta';
      case 6: return 'Mushroom Risotto';
      default: return 'Unknown Item';
    }
  }).join(', ');
}

module.exports = { ifEquals, mapItemsToNames };
