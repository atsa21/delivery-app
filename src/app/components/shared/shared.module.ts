import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageComponent } from './error-message/error-message.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ProductCardComponent,
    ErrorMessageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    ProductCardComponent,
    ReactiveFormsModule,
    FormsModule,
    ErrorMessageComponent
  ]
})
export class SharedModule { }
