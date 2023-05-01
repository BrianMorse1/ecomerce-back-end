const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');


// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products
  try {
    const products = await Product.findAll({
      include: [{ model: Category}, {model: Tag}],
    });
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  });


// get one product
router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  try {
    const product = await Product.findById(req.params.id, {
      include: [{ model: Category}, {model: Tag}],
    });
    if (!product){
      res.status(404).json({ message: 'No product found with that id.'});
      return;
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
    }
  });

// create new product
router.post('/', async (req, res) => {
 try {
  const product = await Product.create(req.body);
  res.status(200).json(product);
}catch(err) {
res.status(400).json(err);
}});

// update product
router.put('/:id', async (req, res) => {
  try {
    const product = await Product.update(
      {
        product_name: req.body.product_name
      },
      {
        where: {
          id: req.params.id
        }
      }
    )

    res.status(200).json(product);


  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
  
});

router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  try {
    const product = await Product.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    )
    res.status(200).json(product);

  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});







module.exports = router;
