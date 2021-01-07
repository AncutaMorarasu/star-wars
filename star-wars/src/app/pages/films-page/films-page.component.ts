import { Component, OnInit } from '@angular/core';
import { filmsImg } from 'src/app/src-api';

@Component({
  selector: 'app-films-page',
  templateUrl: './films-page.component.html',
  styleUrls: ['./films-page.component.css'],
})
export class FilmsPageComponent implements OnInit {
  movies = [];
  constructor() {}

  ngOnInit(): void {
    fetch('https://swapi.dev/api/films/')
      .then((response) => response.json())
      .then((result) => {
        this.movies = result.results;
        //loop through array of movies, if an episode id matches the id from image source API, a new property is added to movie object
        //new property is 'image' used for the img src in HTML template
        this.movies.forEach(function (entry) {
          for (var k = 0; k < filmsImg.length; k++) {
            if (filmsImg[k].id == entry.episode_id) {
              entry['image'] = filmsImg[k].src;
            }
          }
        });
      });
  }
}
