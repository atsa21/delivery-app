import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProductItem } from 'src/app/models/product.interface';
import { Observable, Subscription, takeUntil, Subject } from 'rxjs'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: ProductItem;
  @Input() shop!: string;
  @Input() isOrder = false;
  @Input() cleanEvent!: Observable<void>;

  isInfoShowed = false;

  @Output() isItemsAdded = new EventEmitter<boolean>();
  private cleanSubscription!: Subscription;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  prodAddedIndex!: number;
  isAdded = false;
  prodAmount!: FormControl;
  
  private order: any;

  ngOnInit(): void {
    console.log(this.product);
    this.prodAmount = new FormControl(0, [Validators.min(1), Validators.max(20)]);
    this.getOrder();
    if(!this.isOrder) {
      this.cleanSubscription = this.cleanEvent.pipe(takeUntil(this.destroy$)).subscribe(() => this.getOrder());
    }
  }

  get amount() {
    return this.prodAmount.value;
  }

  private getOrder(): void {
    this.order = JSON.parse(localStorage.getItem('order') || '[]');
    if(!this.order.length) {
      localStorage.removeItem('shop');
      this.isItemsAdded.emit(false);
    } else {
      this.isItemsAdded.emit(true);
    }
    this.prodAddedIndex = this.order.findIndex((el: any) => el.name === this.product.name);
    this.isAdded = !!(this.prodAddedIndex + 1);
    if(this.isAdded) {
      this.prodAmount.setValue(this.order[this.prodAddedIndex].amount);
    }
  }

  addItemToCart(): void {
    this.getOrder();
    const newItem = {
      name: this.product.name,
      image: this.product.image,
      price: this.product.price, 
      amount: 1
    };
    this.order ? this.order.push(newItem) : this.order = [newItem];
    this.isAdded = true;
    localStorage.setItem('shop', JSON.stringify(this.shop));
    localStorage.setItem('order', JSON.stringify(this.order));
    this.prodAmount.setValue(1);
    this.isItemsAdded.emit(true);
  }

  setAmount(event: KeyboardEvent): void {
    if(event.key === '-' || event.key === 'e') {
      this.prodAmount.setValue(1);
    }
    this.setItemAmount();
  }

  incrementAmount(): void {
    this.getOrder();
    this.prodAmount.setValue(this.amount + 1);
    this.setItemAmount();
  }

  decrementAmount(): void {
    this.getOrder();
    this.prodAmount.setValue(this.amount - 1);
    !this.amount ? this.order = this.order.filter((el: any) => el.name !== this.product.name) : this.setItemAmount();
    this.updateOrder();
  }

  setItemAmount(): void {
    if(this.prodAmount.valid) {
      this.order[this.prodAddedIndex].amount = this.amount;
      this.updateOrder();
    }
  }

  setValidAmount(): void {
    if(this.prodAmount.invalid) {
      this.updateOrder();
    }
  }

  private updateOrder(): void {
    localStorage.setItem('order', JSON.stringify(this.order));
    this.getOrder();
  }
}
