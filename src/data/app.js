const express = require('express');
const app = express();
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/carts');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mi_base_de_datos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
