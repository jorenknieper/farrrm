import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  items: any = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {title: 'MANTIS', date: '25.11.2020', price: 'GRATIS', description: 'Komen opnemen? Een Livesessie nodig? Niet zeker hoe je Komen opnemen?', imageUri: 'https://via.placeholder.com/150'},
      {title: 'MANTIS', date: '25.11.2020', price: 'GRATIS', description: 'Komen opnemen? Een Livesessie nodig? Niet zeker hoe je Komen opnemen?', imageUri: 'https://via.placeholder.com/150'},
      {title: 'MANTIS', date: '25.11.2020', price: 'GRATIS', description: 'Komen opnemen? Een Livesessie nodig? Niet zeker hoe je Komen opnemen?', imageUri: 'https://via.placeholder.com/150'},
      {title: 'MANTIS', date: '25.11.2020', price: 'GRATIS', description: 'Komen opnemen? Een Livesessie nodig? Niet zeker hoe je Komen opnemen?', imageUri: 'https://via.placeholder.com/150'}
    ];
  }

}
