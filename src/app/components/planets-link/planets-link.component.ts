import { Component, Input, OnInit } from '@angular/core';
import { FilmsApiService } from 'src/app/services/films-api.service';

@Component({
  selector: 'app-planets-link',
  templateUrl: './planets-link.component.html',
  styleUrls: ['./planets-link.component.css'],
})
export class PlanetsLinkComponent implements OnInit {
  @Input() planetLink;
  name: any;
  id;
  private computePlanetId() {
    let splitLink = this.planetLink.split('/');
    return parseInt(splitLink[splitLink.length - 2]);
  }
  constructor(private filmApiService: FilmsApiService) {}

  ngOnInit(): void {
    this.filmApiService
      .getDetailsByLink(this.planetLink)
      .subscribe((res: any) => {
        this.name = res.name;
        this.id = this.computePlanetId();
      });
  }
}
