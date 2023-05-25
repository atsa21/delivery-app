import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductItem } from 'src/app/models/product.interface';
import { User } from 'src/app/models/user.interface';
import { OrderService } from 'src/app/services/order-servise/order.service';
import { take } from 'rxjs';

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

  isFormValid = false;

  constructor( private router: Router, private orderService: OrderService) {}

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
    this.personalInfo = info;
    this.isFormValid = this.personalInfo.valid;
  }

  addOrder(): void {
    if(this.isFormValid) {
      const user: User = this.personalInfo.value;
      const orderData = {
        client: user,
        order: this.order,
        totalPrice: this.totalPrice
      };
      this.orderService.addOrder(orderData).pipe(take(1)).subscribe(() => {
        localStorage.clear();
        this.goToShop();
      });
    }
  }
}
