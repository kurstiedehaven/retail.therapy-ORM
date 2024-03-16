const { Product } = require('../models');

const productData = [
  {
    product_name: 'Off the Shoulder Top',
    price: 44.99,
    stock: 116,
    category_id: 1,
  },
  {
    product_name: 'Cargo Shorts',
    price: 32.99,
    stock: 115,
    category_id: 5,
  },
  {
    product_name: 'Beyonce Album',
    price: 59.99,
    stock: 112,
    category_id: 4,
  },
  {
    product_name: 'Baseball Cap',
    price: 22.99,
    stock: 175,
    category_id: 3,
  },
  {
    product_name: 'Nike Air Force 1',
    price: 160.99,
    stock: 1,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
