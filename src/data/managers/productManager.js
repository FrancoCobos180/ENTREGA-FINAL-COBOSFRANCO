// managers/productManager.js
const Product = require('../models/product');

class ProductManager {
    async getAll(limit) {
        return await Product.find().limit(limit);
    }

    async getById(id) {
        return await Product.findOne({ id });
    }

    async create(data) {
        const newProduct = new Product(data);
        return await newProduct.save();
    }

    async update(id, data) {
        return await Product.findOneAndUpdate({ id }, data, { new: true });
    }

    async delete(id) {
        return await Product.findOneAndDelete({ id });
    }
}

module.exports = new ProductManager();
