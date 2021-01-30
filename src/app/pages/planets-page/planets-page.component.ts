import { Component, OnInit } from '@angular/core';
import { planetSrc } from 'src/app/src-api';
import { FilmsApiService } from 'src/app/services/films-api.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-planets-page',
  templateUrl: './planets-page.component.html',
  styleUrls: ['./planets-page.component.css'],
})
export class PlanetsPageComponent implements OnInit {
  planets = [];
  private url = 'planets/';
  constructor(
    private filmService: FilmsApiService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.filmService.getAllElements(this.url).subscribe((data: any) => {
      if (data) {
        this.spinner.hide();
      }
      this.planets = data['results'];
      this.planets.forEach((entry) => {
        entry['id'] = this.planets.indexOf(entry) + 1;
        for (let srcImage of planetSrc) {
          if (srcImage.id === entry.id) {
            entry['image'] = srcImage.src;
          }
        }
      });
    });
  }
}
