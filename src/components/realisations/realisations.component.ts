import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.scss']
})
export class RealisationsComponent implements OnInit {
  videos: any;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    let descriptionPlaceholder = 'Tectatio berferspit desciis verum reri ommos ex eum quas vel ius eaquas aciti aut qui odis accum ad quia quam excea cum haribus quatium quod Mus. Puda vel et mod estotae volupta nempos et il in nimaximod ut poriatus asse si officia pos pa ipsam volupta nemporis eosti';
    this.videos = [
      { title: 'LATEST', url: this.getYouTubeUrlByEmbedId('iTHhMj7Z4n8'), description: descriptionPlaceholder, left: true },
      { title: 'PUURR', url: this.getYouTubeUrlByEmbedId('iTHhMj7Z4n8'), description: descriptionPlaceholder, left: false },
      { title: 'FARRM PRESENTS', url: this.getYouTubeUrlByEmbedId('iTHhMj7Z4n8'), description: descriptionPlaceholder, left: true },
      { title: 'FARRM EXTENDED', url: this.getYouTubeUrlByEmbedId('iTHhMj7Z4n8'), description: descriptionPlaceholder, left: false },
      { title: '22MINUTES', url: this.getYouTubeUrlByEmbedId('iTHhMj7Z4n8'), description: descriptionPlaceholder, left: true },
    ];
  }

  getYouTubeUrlByEmbedId(id: string) {
    let unsafeUrl: string = 'https://www.youtube.com/embed/' + id;
    return this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl); 
  }
}
