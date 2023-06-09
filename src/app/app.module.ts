import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SharedModule } from './components/shared/shared.module';
import { ShopComponent } from './components/main-page/shop/shop.component';
import { ShoppingCartComponent } from './components/main-page/shopping-cart/shopping-cart.component';
import { ShopFilterComponent } from './components/main-page/shop/shop-filter/shop-filter.component';
import { ShopCardComponent } from './components/main-page/shop/shop-filter/shop-card/shop-card.component';
import { PersonalInfoComponent } from './components/main-page/shopping-cart/personal-info/personal-info.component';
import { CartComponent } from './components/main-page/shopping-cart/cart/cart.component';
import { IMaskModule } from 'angular-imask';
import { GoogleMapsModule } from '@angular/google-maps';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ShopComponent,
    ShoppingCartComponent,
    ShopFilterComponent,
    ShopCardComponent,
    PersonalInfoComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    IMaskModule,
    GoogleMapsModule,
    GooglePlaceModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
