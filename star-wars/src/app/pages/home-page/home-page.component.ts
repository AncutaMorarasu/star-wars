import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    fetch('https://swapi.dev/api/people/')
      .then((response) => response.json())
      .then((result) => {
        console.log(result.results);
      });
  }
}
