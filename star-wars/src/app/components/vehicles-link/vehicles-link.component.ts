import { Component, Input, OnInit } from '@angular/core';
import { FilmsApiService } from 'src/app/services/films-api.service';

@Component({
  selector: 'app-vehicles-link',
  templateUrl: './vehicles-link.component.html',
  styleUrls: ['./vehicles-link.component.css'],
})
export class VehiclesLinkComponent implements OnInit {
  @Input() vehiclesLink;
  name;
  id;
  private computeVehiclesId() {
    let splitLink = this.vehiclesLink.split('/');
    return parseInt(splitLink[splitLink.length - 2]);
  }
  constructor(private filmApiService: FilmsApiService) {}

  ngOnInit(): void {
    this.filmApiService.getDetailsByLink(this.vehiclesLink).subscribe((res) => {
      this.name = res.name;
      this.id = this.computeVehiclesId();
    });
  }
}
