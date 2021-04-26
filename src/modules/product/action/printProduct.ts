import  Product  from '../model/productModel';
import { inflatePrice } from '../service/productService';

export default function printProduct(req, res): void {
    const product = new Product();
    product.fill({code: '123', price: '5'});
    inflatePrice(product);
    res.json(product);
}