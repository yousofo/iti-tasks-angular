import { Component, effect } from '@angular/core';
import products from './products.json';
import { IProduct } from '../../types/IProduct';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../../services/data/products.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-products',
  imports: [ProductComponent],
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers: [ProductsService, HttpClient],
})
export class ProductsComponent {
  products: IProduct[] = [];

  constructor(private productsService: ProductsService) {
    effect(() => {
      console.log('products: ', this.products);
      this.products = this.productsService.products();
    });
  }

  ngOnInit() {
    // this.products = this.productsService.products();
  }
}
