import { Component } from '@angular/core';
import { ShopService } from 'src/app/services/shop-service/shop.service';
import { take } from 'rxjs';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {

  products!: Product[];

  constructor( private shopService: ShopService) {}

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

      this.products = res.data.products;
    })
  }
}
