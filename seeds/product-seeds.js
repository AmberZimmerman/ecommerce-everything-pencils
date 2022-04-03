const { Product } = require('../models');

const productData = [
  {
    product_name: 'Rainbow colored pencil',
    price: 3.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Tri Tip Eraser',
    price: 2.99,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Jumbo',
    price: 4.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Pilot Airblanc Mechanical Pencil',
    price: 3.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Musgraves Harvest Pencil',
    price: 1.50,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
