import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Shop } from 'src/app/models/shop.interface';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent {

  @Input() shop!: Shop;

  @Output() shopSelected = new EventEmitter<string>();

  selectShop(): void {
    this.shopSelected.emit(this.shop.id);
  }
}
