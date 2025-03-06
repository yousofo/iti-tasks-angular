import { Injectable } from '@angular/core';
import { IProduct } from '../types/IProduct';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: { product: IProduct; quantity: number }[] = [];
  constructor() {}

  addProduct(product: { product: IProduct; quantity: number }) {
    this.products.push(product);
  }

  removeProduct(id: number) {
    this.products = this.products.filter((p) => p.product.id !== id);
  }

  getTotalQuantity() {
    return this.products.reduce(
      (total, product) => total + product.quantity,
      0
    );
  }

  getTotalPrice() {
    return this.products.reduce(
      (total, product) => total + product.quantity * product.product.price,
      0
    );
  }
  clearCart() {
    this.products = [];
  }

  getQuantity(id:number) {
    return (
      this.products.find((p) => p.product.id === id)?.quantity || 0
    );
  }

  addQuantity(id: number) {
    this.products = this.products.map((p) => {
      if (p.product.id === id) {
        p.quantity++;
      }
      return p;
    });
  }

  removeQuantity(id: number) {
    this.products = this.products.map((p) => {
      if (p.product.id === id) {
        p.quantity--;
      }
      return p;
    });
  }
}
