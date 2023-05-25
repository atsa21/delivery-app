import { Component, OnInit } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
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

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.navList.forEach(el => el.selected = this.router.url === el.link);
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe((link: any) => {
      this.navList.forEach(el => el.selected = link.routerEvent.url === el.link);
    })
  }
}
