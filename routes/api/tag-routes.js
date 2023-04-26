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

// // get one product
// router.get('/:id', async (req, res) => {
//   // find a single product by its `id`
//   try {
//     const product = await Product.findById(req.params.id, {
//       include: [{ model: Category.id}, {model: Tag.id}],
//     });
//     if (!product){
//       res.status(404).json({ message: 'No product found with that id.'});
//       return;
//     }

//     res.status(200).json(product);
//   } catch (err) {
//     res.status(500).json(err);
//     }
//   });







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
