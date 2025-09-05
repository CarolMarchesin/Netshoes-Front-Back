import productService from '../service/productService.js';

class ProductController {
  async getAllProducts(req, res) {
    try {
      const products = await productService.getAllProducts();
      res.status(200).json(products);
    } catch {
      res.status(500).json({ error: 'Error fetching products' });
    }
  }

  async getProductsByCodes(req, res) {
    try {
      const products = await productService.getProductsByCodes(req.body.codes);
      res.status(200).json(products);
    } catch {
      res.status(500).json({ error: 'Error fetching products by codes' });
    }
  }
}

export default new ProductController();
