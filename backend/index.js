import express from 'express';
import cors from 'cors';
import productController from './controller/productController.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/products', productController.getAllProducts);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
