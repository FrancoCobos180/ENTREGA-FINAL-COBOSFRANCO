// models/product.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    code: String,
    price: Number,
    status: Boolean,
    stock: Number,
    category: String
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
