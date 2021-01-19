import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FilmsApiService {
  private filmsURL = 'https://swapi.dev/api/films/';
  private charactersURL = 'https://swapi.dev/api/people/';
  private planetsURL = 'https://swapi.dev/api/planets/';
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

  public getAllCharacters() {
    return this.httpClient.get(this.charactersURL);
  }
  public getCharacterById(id) {
    return this.httpClient.get(`${this.charactersURL}${id}`);
  }

  public getAllPlanets() {
    return this.httpClient.get(this.planetsURL);
  }
  public getPlanetById(id) {
    return this.httpClient.get(`${this.planetsURL}${id}`);
  }
}
