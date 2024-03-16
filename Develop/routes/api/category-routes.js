const router = require('express').Router();
const { model } = require('../../config/connection');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({ include: [{ model: Product }] });
    // LOOK AT RES.JSON FOR ALL ROUTES
    res.json(categoryData);
  } catch (err) {
    // handling errors by sending a 500 status code with a message
    res.status(500).json({ message: 'Failed to get categories!'});
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, { include: [{ model: Product }] });
  } catch (err) {
    // handling errors by sending a 500 status code with a message
    res.status(500).json({ message: 'Failed to get category!' });
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    // sending a 200 status code with a message
    res.status(200).json(newCategory);
  } catch (err) {
    // handling errors by sending a 500 status code with a message
    res.status(500).json({ message: 'Failed to create category!' });
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updatedCategory = await Category.update(req.body, {where: {id: req.params.id}});
  } catch (err) {
    // handling errors by sending a 500 status code with a message
    res.status(500).json({ message: 'Failed to update category!' });
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCategory = await Category.destroy({where: {id: req.params.id}});
  } catch (err) {
    // handling errors by sending a 500 status code with a message
    res.status(500).json({ message: 'Failed to delete category!' });
  }
});

module.exports = router;
