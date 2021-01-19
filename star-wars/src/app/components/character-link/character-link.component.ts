import { Component, Input, OnInit } from '@angular/core';
import { FilmsApiService } from 'src/app/services/films-api.service';

@Component({
  selector: 'app-character-link',
  templateUrl: './character-link.component.html',
  styleUrls: ['./character-link.component.css'],
})
export class CharacterLinkComponent implements OnInit {
  @Input() link;
  name;
  id;
  private computeCharacterId() {
    let splitLink = this.link.split('/');
    return parseInt(splitLink[splitLink.length - 2]);
  }
  constructor(private filmApiService: FilmsApiService) {}

  ngOnInit(): void {
    this.filmApiService.getDetailsByLink(this.link).subscribe((res) => {
      this.name = res.name;
      this.id = this.computeCharacterId();
    });
  }
}
