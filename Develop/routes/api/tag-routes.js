const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    // find all tags
    const tags = await Tag.findAll({ include: [{ model: Product }] });
    res.status(200).json(tags);
  } catch {
    // handling errors by sending a 500 status code with a message
    res.status(500).json({ message: 'Failed to get tags!' });
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    // find a single tag by its `id`
    const tag = await Tag.findByPk(req.params.id, { include: [{ model: Product }] });
    res.status(200).json(tag);
  } catch {
    // handling errors by sending a 500 status code with a message
    res.status(500).json({ message: 'Failed to get tag!' });
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tag = await Tag.create(req.body);
    res.status(200).json(tag);
  } catch {
    // handling errors by sending a 500 status code with a message
    res.status(500).json({ message: 'Failed to create tag!' });
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(tag);
  } catch {
    // handling errors by sending a 500 status code with a message
    res.status(500).json({ message: 'Failed to update tag!' });
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deletedTag = await Tag.destroy({ where: { id: req.params.id } });
    res.status(200).json(deletedTag);
  } catch {
    // handling errors by sending a 500 status code with a message
    res.status(500).json({ message: 'Failed to delete tag!' });
  }
});

module.exports = router;
