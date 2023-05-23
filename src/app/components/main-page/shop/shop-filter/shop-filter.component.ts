import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShopService } from 'src/app/services/shop-service/shop.service';
import { take } from 'rxjs';
import { Shop } from 'src/app/models/shop.interface';

@Component({
  selector: 'app-shop-filter',
  templateUrl: './shop-filter.component.html',
  styleUrls: ['./shop-filter.component.scss']
})
export class ShopFilterComponent implements OnInit {

  shops!: Shop[];

  @Output() shopSelected = new EventEmitter<string>();

  constructor( private shopService: ShopService) {}

  ngOnInit(): void {
    this.getShops();
  }

  private getShops(): void {
    this.shopService.getShops().pipe(take(1)).subscribe((res: any) => {
      res.data.forEach((shop: any) => {
        shop.id = shop._id;
        delete shop._id;
      });
      res.data[0].selected = true;
      this.shops = res.data;
      this.shopSelected.emit(res.data[0].id);
    })
  }

  setShopId(shopId: string): void {
    this.shopSelected.emit(shopId);
  }

}
