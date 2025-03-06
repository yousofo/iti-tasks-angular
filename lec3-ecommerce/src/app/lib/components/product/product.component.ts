import { Component, inject, input } from '@angular/core';
import { IProduct } from '../../types/IProduct';
import { NgClass,CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  imports: [NgClass,CurrencyPipe,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  standalone  : true
})
export class ProductComponent {
  data = input<IProduct>();
  cartService = inject(CartService);
  addToCart() {
    if(this.data()?.stock! > 0){
      this.cartService.addProduct({ product: this.data()!, quantity: 1 });
    }
  }
  removeFromCart() {
    this.cartService.removeProduct(this.data()!.id);
  }
  get inCart(){
    return this.cartService.products.find((p) => p.product.id === this.data()!.id);
  }
}
