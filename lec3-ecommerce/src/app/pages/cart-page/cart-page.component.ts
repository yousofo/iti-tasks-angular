import { Component, inject } from '@angular/core';
import { CartService } from '../../lib/services/cart.service';
import { CurrencyPipe } from '@angular/common';
import { IProduct } from '../../lib/types/IProduct';

@Component({
  selector: 'app-cart-page',
  imports: [CurrencyPipe],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
})
export class CartPageComponent {
  cartService = inject(CartService);

  get products() {
    return this.cartService.products;
  }
  removeFromCart(id: number) {
    this.cartService.removeProduct(id);
  }
  removeQuantity(id: number) {
    if (this.cartService.getQuantity(id) === 1) {
      return this.removeFromCart(id);
    }
    this.cartService.removeQuantity(id);
  }
  addQuantity(product: { product: IProduct; quantity: number }) {
    if (product.product.stock! > 0 && product.quantity < product.product.stock!){
      this.cartService.addQuantity(product.product.id);
    }
  }
  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }
}
