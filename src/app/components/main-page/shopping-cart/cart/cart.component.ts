import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductItem } from 'src/app/models/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  @Input() order!: ProductItem[];
  @Input() shop!: string;

  @Output() isItemsAdded = new EventEmitter<boolean>();

  setChangedOrder(): void {
    this.isItemsAdded.emit();
  }
}
