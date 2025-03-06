import { HttpClient } from '@angular/common/http';
import { DestroyRef, effect, Injectable, signal } from '@angular/core';
import { IProduct } from '../../types/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = signal<IProduct[]>([]);
  currentProduct: IProduct | undefined;
  // currentProductId!: number;

  constructor(private http: HttpClient, private destroyRef: DestroyRef) {
    const productsSubscription = this.http
      .get<{ products: IProduct[] }>('https://dummyjson.com/products')
      .subscribe({
        next: (data) => {
          this.products.set(data.products);

          console.log('products service: ', this.products);
        },
      });

    // const productSubscription = this.http
    //   .get(`https://dummyjson.com/products/${this.currentProductId}`)
    //   .subscribe((data) => {
    //     this.currentProduct = data as IProduct;
    //   });

    this.destroyRef.onDestroy(() => {
      productsSubscription.unsubscribe();
      // productSubscription.unsubscribe();
    });
  }

  ngOnInit() {}
  getProduct(id: number) {
    return this.http.get<IProduct>(`https://dummyjson.com/products/${id}`);
  }
}
