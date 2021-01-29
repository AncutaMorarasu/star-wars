import { Component, OnInit } from '@angular/core';
import { filmsImg } from 'src/app/src-api';
import { FilmsApiService } from 'src/app/services/films-api.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-films-page',
  templateUrl: './films-page.component.html',
  styleUrls: ['./films-page.component.css'],
})
export class FilmsPageComponent implements OnInit {
  movies = [];
  private url = 'films/';
  constructor(
    private filmService: FilmsApiService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();

    this.filmService.getAllElements(this.url).subscribe((data) => {
      if (data) {
        this.spinner.hide();
      }
      this.movies = data['results'];
      this.movies.forEach((entry) => {
        entry['id'] = this.movies.indexOf(entry) + 1;
        //loop through array of image source api, if an episode id matches the id from image source API, a new property is added to movie object
        //new property is 'image' used for the img src in HTML template
        for (let srcImage of filmsImg) {
          if (srcImage.id === entry.id) {
            entry['image'] = srcImage.src;
          }
        }
      });
    });
  }
}
