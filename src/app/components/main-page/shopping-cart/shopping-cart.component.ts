import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductItem } from 'src/app/models/product.interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  order!: ProductItem[];
  shop!: string;
  totalPrice = 0;
  personalInfo: any;

  isValidForm = false;

  constructor( private router: Router) {}

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder(): void {
    this.order = JSON.parse(localStorage.getItem('order') || '[]');
    this.shop = localStorage.getItem('shop') as string;
    if(this.order && this.order.length) {
      this.totalPrice = this.getTotalPrice();
    }
  }

  setChangedOrder(): void {
    this.getOrder();
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    for (const item of this.order) {
      totalPrice += item.price * Number(item.amount);
    }
    return totalPrice;
  }

  goToShop(): void {
    this.router.navigate(['']);
  }

  setOrderValue(info: any): void {
    console.log(info);
    this.personalInfo = info;
    this.isValidForm = this.personalInfo.valid;
  }

  addOrder(): void {

  }
}
