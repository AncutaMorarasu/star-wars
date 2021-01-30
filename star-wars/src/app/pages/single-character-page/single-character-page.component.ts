import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FilmsApiService } from 'src/app/services/films-api.service';
import { characterImg } from 'src/app/src-api';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-single-character-page',
  templateUrl: './single-character-page.component.html',
  styleUrls: ['./single-character-page.component.css'],
})
export class SingleCharacterPageComponent implements OnInit {
  private routeSub: Subscription;
  public charachterId: number;
  public character;
  public imgSrc: string;
  private url = 'people/';
  constructor(
    private route: ActivatedRoute,
    private filmService: FilmsApiService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.routeSub = this.route.params.subscribe((params) => {
      this.charachterId = params['id'];
      for (let charImg of characterImg) {
        if (this.charachterId == charImg.id) {
          this.imgSrc = charImg.src;
        }
      }
    });
    this.filmService
      .getElementById(this.url, this.charachterId)
      .subscribe((data: any) => {
        if (data) {
          this.spinner.hide();
        }
        this.character = data;
      });
  }
}
