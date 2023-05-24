import { Component, Input, OnInit } from '@angular/core';
import { ProductItem } from 'src/app/models/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: ProductItem;
  @Input() shop!: string;

  prodAddedIndex!: number;
  isAdded = false;
  private order: any;

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder(): void {
    this.order = JSON.parse(localStorage.getItem('order') || '[]');
    this.prodAddedIndex = this.order.findIndex((el: any) => el.name === this.product.name);
    this.isAdded = !!(this.prodAddedIndex + 1);
  }

  addItemToCart(): void {
    this.getOrder();
    if(this.prodAddedIndex !== -1) {
      const newAmount = this.order[this.prodAddedIndex].amount + 1;
      this.order[this.prodAddedIndex].amount = newAmount;
    } else {
      const newItem = {
        name: this.product.name, 
        price: this.product.price, 
        amount: 1
      };
      this.order ? this.order.push(newItem) : this.order = [newItem];
    }
    this.isAdded = true;
    localStorage.setItem('shop', JSON.stringify(this.shop));
    localStorage.setItem('order', JSON.stringify(this.order));
  }
}
