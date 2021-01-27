import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FilmsApiService } from 'src/app/services/films-api.service';
import { filmsImg } from 'src/app/src-api';

@Component({
  selector: 'app-single-film',
  templateUrl: './single-film.component.html',
  styleUrls: ['./single-film.component.css'],
})
export class SingleFilmComponent implements OnInit {
  private routeSub: Subscription;
  public episodeId: number;
  public movie;
  public romanNumeral: string;
  public imgSrc: string;
  constructor(
    private route: ActivatedRoute,
    private filmService: FilmsApiService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.episodeId = params['id'];
      for (let romanSrc of filmsImg) {
        if (this.episodeId == romanSrc.id) {
          this.romanNumeral = romanSrc.roman;
          this.imgSrc = romanSrc.src;
        }
      }
    });
    this.filmService.getFilmById(this.episodeId).subscribe((data: any) => {
      this.movie = data;
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
