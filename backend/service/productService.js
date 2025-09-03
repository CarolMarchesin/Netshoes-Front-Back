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
}

export default new ProductService();
