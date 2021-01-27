import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { FilmsPageComponent } from './pages/films-page/films-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlanetsPageComponent } from './pages/planets-page/planets-page.component';
import { SingleCharacterPageComponent } from './pages/single-character-page/single-character-page.component';
import { SingleFilmComponent } from './pages/single-film-page/single-film/single-film.component';
import { SinglePlanetPageComponent } from './pages/single-planet-page/single-planet-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'filme', component: FilmsPageComponent },
  { path: 'charaktere', component: CharactersPageComponent },
  { path: 'planeten', component: PlanetsPageComponent },
  { path: 'filme/:id', component: SingleFilmComponent },
  { path: 'charaktere/:id', component: SingleCharacterPageComponent },
  { path: 'planeten/:id', component: SinglePlanetPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
