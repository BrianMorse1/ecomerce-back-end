const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  const categories = await Category.findAll().catch((err) =>{
  res.json(err);
});
  res.json(categories);

  // be sure to include its associated Products
});


router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const category = await Category.findById(req.params.id).catch((err) =>{
      res.json(err);
      });
      res.json(category);
      } catch (err) {
        res.json(err);
        }
  
  // be sure to include its associated Products
});








router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
