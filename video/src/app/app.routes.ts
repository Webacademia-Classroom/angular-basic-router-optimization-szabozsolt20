import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ShopComponent } from './page/shop/shop.component';
import { CartComponent } from './page/cart/cart.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "shop",
    component: ShopComponent,
  },
  {
    path: "shop/cart",
    component: CartComponent,
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];
