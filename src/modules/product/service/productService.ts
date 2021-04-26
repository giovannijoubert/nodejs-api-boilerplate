import  Product from '../model/productModel';
export function inflatePrice(product: Product): void {
    product.price = product.price*2;
}

