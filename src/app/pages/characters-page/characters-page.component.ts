import { Component, OnInit } from '@angular/core';
import { FilmsApiService } from 'src/app/services/films-api.service';
import { characterImg } from 'src/app/src-api';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.css'],
})
export class CharactersPageComponent implements OnInit {
  characters = [];
  private url = 'people/';
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
      this.characters = data['results'];

      this.characters.forEach((entry) => {
        entry['id'] = this.characters.indexOf(entry) + 1;
        for (let srcImage of characterImg) {
          if (srcImage.id === entry.id) {
            entry['image'] = srcImage.src;
          }
        }
      });
    });
  }
}
