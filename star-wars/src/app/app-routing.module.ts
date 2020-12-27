import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { FilmsPageComponent } from './pages/films-page/films-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlanetsPageComponent } from './pages/planets-page/planets-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'filme', component: FilmsPageComponent },
  { path: 'charaktere', component: CharactersPageComponent },
  { path: 'planeten', component: PlanetsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
