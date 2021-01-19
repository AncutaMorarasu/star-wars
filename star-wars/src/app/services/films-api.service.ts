import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FilmsApiService {
  private filmsURL = 'https://swapi.dev/api/films/';

  constructor(private httpClient: HttpClient) {}
  public getAllFilms() {
    return this.httpClient.get(this.filmsURL);
  }

  public getFilmById(id) {
    return this.httpClient.get(`${this.filmsURL}${id}`);
  }

  public getDetailsByLink(link) {
    return this.httpClient.get(link);
  }
}
