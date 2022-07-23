const router = require("express").Router();
const Product = require("../../models/product");
const { permit, authenticate } = require("../../middleware")

router.post("/product/add", [authenticate, permit], (req, res) => {
	const newProduct = new Product(req.body);
	newProduct.save().then(item => {
		res.status(200).json(item)
	});
});

router.get('/product/all', async (req, res) => {
	try {
		const skip = req.query.skip && !isNaN(req.query.skip) ? Number(req.query.skip) : 0;
		const products = await Product.find({}).skip(skip).limit(5).select("_id name price image")
		// .sort('title')
		res.status(200).send(products)
	} catch (e) {
		res.status(500).send()
	}
})

router.get('/product/get/:id', async (req, res) => { 
	const id = req.params.id
	const product = await Product.findById(id).select("-__v")

	res.status(200).json(product)
})


module.exports = router;

