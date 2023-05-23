import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ShopComponent } from './components/main-page/shop/shop.component';
import { ShoppingCartComponent } from './components/main-page/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', 
    component: MainPageComponent, 
    children: [
      { path: '', component: ShopComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
