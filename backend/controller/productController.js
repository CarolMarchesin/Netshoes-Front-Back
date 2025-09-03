import productService from '../service/productService.js';

class ProductController {
  async getAllProducts(req, res) {
    try {
      const products = await productService.getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching products' });
    }
  }
}

export default new ProductController();
