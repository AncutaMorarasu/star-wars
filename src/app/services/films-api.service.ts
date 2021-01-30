import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FilmsApiService {
  private baseURL = 'https://swapi.dev/api/';

  constructor(private httpClient: HttpClient) {}
  public getAllElements(element) {
    return this.httpClient.get(`${this.baseURL}${element}`);
  }

  public getElementById(element, id) {
    return this.httpClient.get(`${this.baseURL}${element}${id}`);
  }

  public getDetailsByLink(link) {
    return this.httpClient.get(link);
  }
}
