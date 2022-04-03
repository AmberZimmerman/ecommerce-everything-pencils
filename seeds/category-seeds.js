const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Colored Pencils',
  },
  {
    category_name: 'Writing Pencils',
  },
  {
    category_name: 'Mechanical Pencils',
  },
  {
    category_name: 'Novelty Pencils',
  },
  {
    category_name: 'Erasers',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
