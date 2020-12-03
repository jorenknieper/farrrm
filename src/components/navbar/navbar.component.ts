import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isCollapsed: Boolean;
  navItems = [];

  ngOnInit(): void {
    this.isCollapsed = true
    this.navItems = [
      { title: 'Over ons', isActive: false, routerLink: 'about' },
      { title: 'Realisaties', isActive: false, routerLink: 'realisaties' },
      { title: 'Studio', isActive: false, routerLink: 'studio' },
      { title: 'Contact', isActive: false, routerLink: 'contact' }
    ];
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
