// routes/products.js
const express = require('express');
const router = express.Router();
const productManager = require('../managers/productManager');

// Ruta para listar productos con limitación
router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit) || undefined;
    const products = productManager.getAll(limit);
    res.json(products);
});

// Ruta para crear un nuevo producto
router.post('/', (req, res) => {
    const { id, title, description, code, price, status, stock, category } = req.body;
    if (id === undefined || !title || !description || !code || price === undefined || status === undefined || stock === undefined || !category) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }
    const newProduct = productManager.create({ id, title, description, code, price, status, stock, category });
    res.status(201).json({ message: 'Producto creado con éxito', product: newProduct });
});

// Ruta para obtener un producto por ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = productManager.getById(id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Producto no encontrado');
    }
});

// Ruta para actualizar un producto por ID
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, description, code, price, status, stock, category } = req.body;
    const updatedProduct = productManager.update(id, { title, description, code, price, status, stock, category });
    if (updatedProduct) {
        res.json({ message: `Producto con ID: ${id} actualizado`, product: updatedProduct });
    } else {
        res.status(404).send('Producto no encontrado');
    }
});

// Ruta para eliminar un producto por ID
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const deletedId = productManager.delete(id);
    res.json({ message: `Producto con ID: ${id} eliminado` });
});

module.exports = router;

