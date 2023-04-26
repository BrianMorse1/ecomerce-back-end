const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product}, {}],
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
        const tag = await Tag.findById(req.params.id, {
          include: [{ model: Product}, {}],
        });
        if (!tag){
          res.status(404).json({ message: 'No tag found with that id.'});
          return;
        }
    
        res.status(200).json(tag);
      } catch (err) {
        res.status(500).json(err);
        }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tag = await Tag.create(req.body);
    res.status(200).json(tag);
}catch(err) {
  res.status(400).json(err);
}});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
