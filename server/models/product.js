const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	category: {
		type: Array,		
	},
	price: {
		type: Number,
		required: true
	},
	image: {
		type: Array,
		required: true
	},
}, { timestamps: true });

const Products = mongoose.model("products", productSchema);

module.exports = Products;