import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FilmsApiService } from 'src/app/services/films-api.service';
import { planetSrc } from 'src/app/src-api';

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
  constructor(
    private route: ActivatedRoute,
    private filmService: FilmsApiService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.planetId = params['id'];
      for (let planetImg of planetSrc) {
        if (this.planetId == planetImg.id) {
          this.imgSrc = planetImg.src;
        }
      }
    });
    this.filmService.getPlanetById(this.planetId).subscribe((data: any) => {
      this.planet = data;
      console.log(data);
    });
  }
}
