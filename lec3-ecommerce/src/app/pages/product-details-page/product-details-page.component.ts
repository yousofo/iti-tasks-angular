import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { DiscountPipe } from '../../lib/pipes/discount.pipe';
import { CurrencyPipe } from '@angular/common';
import { IProduct } from '../../lib/types/IProduct';
import products from '../../lib/components/products/products.json';
import { ProductsService } from '../../lib/services/data/products.service';
import { CartService } from '../../lib/services/cart.service';

@Component({
  selector: 'app-product-details-page',
  imports: [DiscountPipe, CurrencyPipe],
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.scss',
})
export class ProductDetailsPageComponent {
  id = input.required<string>();
  data = signal<IProduct | null>(null);

  cartService = inject(CartService);
  constructor(private productsService: ProductsService) {
    effect(() => {
      this.productsService.getProduct(+this.id()).subscribe({
        next: (data) => {
          this.data.set(data);
        },
      });
    });
  }

  addToCart() {
    if (this.data()?.stock! > 0) {
      this.cartService.addProduct({ product: this.data()!, quantity: 1 });
    }
  }
  removeFromCart() {
    this.cartService.removeProduct(this.data()!.id);
  }
  get inCart() {
    return this.cartService.products.find((p) => p.product.id === this.data()!.id);
  }
}
