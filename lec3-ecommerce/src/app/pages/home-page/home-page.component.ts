import { Component } from '@angular/core';
import { ProductsComponent } from '../../lib/components/products/products.component';

@Component({
  selector: 'app-home-page',
  imports: [ProductsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
