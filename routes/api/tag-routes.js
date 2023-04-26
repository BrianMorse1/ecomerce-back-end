const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  const tags = await Tag.findAll().catch((err) => {
    res.json(err);
  })
  res.json(tags);
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try{
    const tag = await Tag.findById(req.params.id).catch((err) => {
      res.json(err);
      })
      res.json(tag);
      }catch(err){
        res.json(err);
  }
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
