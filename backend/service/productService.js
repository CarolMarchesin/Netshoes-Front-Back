import { readFile } from 'fs/promises';

class ProductService {
    async getAllProducts() {
        try {
            const data = await readFile(new URL('../data/products.json', import.meta.url));
            return JSON.parse(data);
        } catch {
            throw new Error('Falha ao ler arquivo de produtos');
        }
    }

    async getProductsByCodes(codes) {
        try {
            const allProducts = await this.getAllProducts();
            return allProducts.products.filter(product => codes.map(String).includes(String(product.code)));
        } catch {
            throw new Error('Falha ao buscar produtos por códigos');
        }
    }
}

export default new ProductService();
