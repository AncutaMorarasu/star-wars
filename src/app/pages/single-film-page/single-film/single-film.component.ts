import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FilmsApiService } from 'src/app/services/films-api.service';
import { filmsImg } from 'src/app/src-api';
import { NgxSpinnerService } from 'ngx-spinner';

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
  private url = 'films/';
  constructor(
    private route: ActivatedRoute,
    private filmService: FilmsApiService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.routeSub = this.route.params.subscribe((params) => {
      this.episodeId = params['id'];
      for (let romanSrc of filmsImg) {
        if (this.episodeId == romanSrc.id) {
          this.romanNumeral = romanSrc.roman;
          this.imgSrc = romanSrc.src;
        }
      }
    });
    this.filmService
      .getElementById(this.url, this.episodeId)
      .subscribe((data: any) => {
        if (data) {
          this.spinner.hide();
        }
        this.movie = data;
      });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
