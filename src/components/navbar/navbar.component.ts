import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  screenWidth: any;
  isCollapsed: boolean;
  navItems: any[] = [];

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.isCollapsed = true;
    this.navItems = [
      { title: 'Over ons', routerLink: 'about' },
      { title: 'Realisaties', routerLink: 'realisaties' },
      { title: 'Studio', routerLink: 'studio' },
      { title: 'Contact', routerLink: 'contact' }
    ];
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  isMobile(): boolean {
    return this.screenWidth < 992;
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.screenWidth = window.innerWidth;
  }
}
