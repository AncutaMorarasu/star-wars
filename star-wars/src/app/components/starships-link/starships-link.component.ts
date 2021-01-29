import { Component, Input, OnInit } from '@angular/core';
import { FilmsApiService } from 'src/app/services/films-api.service';

@Component({
  selector: 'app-starships-link',
  templateUrl: './starships-link.component.html',
  styleUrls: ['./starships-link.component.css'],
})
export class StarshipsLinkComponent implements OnInit {
  @Input() starshipLink;
  name: any;
  id;
  private computeStarshipId() {
    let splitLink = this.starshipLink.split('/');
    return parseInt(splitLink[splitLink.length - 2]);
  }
  constructor(private filmApiService: FilmsApiService) {}

  ngOnInit(): void {
    this.filmApiService.getDetailsByLink(this.starshipLink).subscribe((res) => {
      this.name = res.name;
      this.id = this.computeStarshipId();
    });
  }
}
