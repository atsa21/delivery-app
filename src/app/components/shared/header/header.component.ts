import { Component } from '@angular/core';
import { Navigation } from 'src/app/models/navigation.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  navList: Navigation[] = [
    { name: 'Shop', link: '' },
    { name: 'Shopping Cart', link: '/shopping-cart' }
  ];
}
