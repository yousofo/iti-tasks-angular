import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'products/:id',
        component: ProductDetailsPageComponent
    },
    {
        path: 'register',
        component: RegisterPageComponent
    },
    {
        path: 'cart',
        component: CartPageComponent
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];
