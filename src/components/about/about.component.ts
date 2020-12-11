import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  members: any = [];

  constructor() { }

  ngOnInit(): void {
    this.members = [
      { name: 'MICHEL', description: 'Deze MANager. Da doluptat. Tendam fuga. Ut vit am, officidia nem dolor adisquat omnis volo quia conseque et, seque labore dolum voluptiis quas restrum nam, in nonsequi cus del ipsum et res inveni consequae voluptat. Bo. Cullut fugit mod', imageUri: 'assets/images/FARRM_Michel.jpg', left: true },
      { name: 'JAN', description: 'Deze audio man Ficaepra tustibus mo is mi, omnimus aut etur? One non num quidelestrum ad qui autat ab intur alite nobitatem aut re ea porehentium repero blandi con resed moluptae. Nequid unda quam, officitius ad undita simpostias is aut dolore', imageUri: 'assets/images/FARRM_jan.jpg', left: false },
      { name: 'ROBIN', description: 'Deze visuele man. Da doluptat. Tendam fuga. Ut vit am, officidia nem dolor adisquat omnis volo quia conseque et, seque labore dolum voluptiis quas restrum nam, in nonsequi cus del ipsum et res inveni consequae voluptat. Bo. Cullut fugit mod', imageUri: 'assets/images/FARRM_Michel.jpg', left: true },
      { name: 'JOREN', description: 'Deze live man Ficaepra tustibus mo is mi, omnimus aut etur? One non num quidelestrum ad qui autat ab intur alite nobitatem aut re ea porehentium repero blandi con resed moluptae. Nequid unda quam, officitius ad undita simpostias is aut dolore', imageUri: 'assets/images/FARRM_jan.jpg', left: false },
      { name: 'VRIJWILLIGERS', description: 'Deze gratis man. Da doluptat. Tendam fuga. Ut vit am, officidia nem dolor adisquat omnis volo quia conseque et, seque labore dolum voluptiis quas restrum nam, in nonsequi cus del ipsum et res inveni consequae voluptat. Bo. Cullut fugit mod', imageUri: 'assets/images/FARRM_Michel.jpg', left: true }
    ];
  }
}
