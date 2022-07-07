import { IProduct } from "./types";

export function addProductToCart(product: IProduct) {
  return {
    type: 'ADD PRODUCT_TO_CART',
    payload: {
      product,
    }
  };
}