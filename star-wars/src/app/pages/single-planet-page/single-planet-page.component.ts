import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FilmsApiService } from 'src/app/services/films-api.service';
import { planetSrc } from 'src/app/src-api';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-single-planet-page',
  templateUrl: './single-planet-page.component.html',
  styleUrls: ['./single-planet-page.component.css'],
})
export class SinglePlanetPageComponent implements OnInit {
  private routeSub: Subscription;
  public planetId: number;
  public planet;
  public imgSrc: string;
  private url = 'planets/';
  constructor(
    private route: ActivatedRoute,
    private filmService: FilmsApiService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.routeSub = this.route.params.subscribe((params) => {
      this.planetId = params['id'];
      for (let planetImg of planetSrc) {
        if (this.planetId == planetImg.id) {
          this.imgSrc = planetImg.src;
        }
      }
    });
    this.filmService
      .getElementById(this.url, this.planetId)
      .subscribe((data: any) => {
        if (data) {
          this.spinner.hide();
        }
        this.planet = data;
      });
  }
}
