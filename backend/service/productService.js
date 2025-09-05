import { readFile } from 'fs/promises';

class ProductService {
    async getAllProducts() {
        try {
            const data = await readFile(new URL('../data/products.json', import.meta.url));
            return JSON.parse(data);
        } catch (error) {
            throw new Error('Failed to read data');
        }
    }

    async getProductsByCodes(codes) {
        try {
            const allProducts = await this.getAllProducts();
            return allProducts.products.filter(product => codes.map(String).includes(String(product.code)));
        } catch (error) {
            throw new Error('Failed to fetch products by codes');
        }
    }
}

export default new ProductService();
