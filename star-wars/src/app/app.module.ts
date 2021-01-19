import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavigationComponent } from './components/navigation/navigation/navigation.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FilmsPageComponent } from './pages/films-page/films-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { PlanetsPageComponent } from './pages/planets-page/planets-page.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { SingleFilmComponent } from './pages/single-film-page/single-film/single-film.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { SingleCharacterPageComponent } from './pages/single-character-page/single-character-page.component';
import { CharacterLinkComponent } from './components/character-link/character-link.component';
import { PlanetsLinkComponent } from './components/planets-link/planets-link.component';
import { SinglePlanetPageComponent } from './pages/single-planet-page/single-planet-page.component';
import { StarshipsLinkComponent } from './components/starships-link/starships-link.component';
import { VehiclesLinkComponent } from './components/vehicles-link/vehicles-link.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomePageComponent,
    FilmsPageComponent,
    CharactersPageComponent,
    PlanetsPageComponent,
    FooterComponent,
    SingleFilmComponent,
    SingleCharacterPageComponent,
    CharacterLinkComponent,
    PlanetsLinkComponent,
    SinglePlanetPageComponent,
    StarshipsLinkComponent,
    VehiclesLinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    // AngularFontAwesomeModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
