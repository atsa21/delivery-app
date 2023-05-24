import { Component } from '@angular/core';
import { ShopService } from 'src/app/services/shop-service/shop.service';
import { take } from 'rxjs';
import { Product } from 'src/app/models/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {

  products!: Product[];
  shopName = '';
  isItemAdded = false;

  constructor( private shopService: ShopService, private router: Router) {}

  getProducts(shopId: string): void {
    this.shopService.getShopById(shopId).pipe(take(1)).subscribe((res: any) => {
      if(res.data.products.length) {
        res.data.products.forEach((prod: any) => {
          prod.id = prod._id;
          delete prod._id;

          prod.items.forEach((item: any) => {
            item.id = item._id;
            delete item._id;
          })
        });
      }

      this.shopName = res.data.name;
      this.products = res.data.products;
    })
  }

  setItemAdded(isAdded: boolean): void {
    this.isItemAdded = isAdded;
  }

  goToCart(): void {
    this.router.navigate(['/shopping-cart']);
  }
}
