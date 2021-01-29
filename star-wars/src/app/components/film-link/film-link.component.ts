import { Component, Input, OnInit } from '@angular/core';
import { FilmsApiService } from 'src/app/services/films-api.service';

@Component({
  selector: 'app-film-link',
  templateUrl: './film-link.component.html',
  styleUrls: ['./film-link.component.css'],
})
export class FilmLinkComponent implements OnInit {
  @Input() filmLink;
  title: any;
  id: any;
  private computeFilmId() {
    let splitLink = this.filmLink.split('/');
    return parseInt(splitLink[splitLink.length - 2]);
  }
  constructor(private filmApiService: FilmsApiService) {}

  ngOnInit(): void {
    this.filmApiService.getDetailsByLink(this.filmLink).subscribe((res) => {
      this.title = res.title;
      this.id = this.computeFilmId();
    });
  }
}
