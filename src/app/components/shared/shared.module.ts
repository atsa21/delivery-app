import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NotificationDialogComponent } from './notification-dialog/notification-dialog.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ProductCardComponent,
    ErrorMessageComponent,
    NotificationDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule
  ],
  exports: [
    HeaderComponent,
    ProductCardComponent,
    ReactiveFormsModule,
    FormsModule,
    ErrorMessageComponent,
    MatDialogModule,
    NotificationDialogComponent
  ]
})
export class SharedModule { }
