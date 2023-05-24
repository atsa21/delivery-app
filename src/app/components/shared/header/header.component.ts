import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Navigation } from 'src/app/models/navigation.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navList: Navigation[] = [
    { name: 'Shop', link: '/', selected: false },
    { name: 'Cart', link: '/shopping-cart', selected: false }
  ];

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.navList.forEach(el => el.selected = this.router.url === el.link);
    console.log(this.router.url);
  }
}
