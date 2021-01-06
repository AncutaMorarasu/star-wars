import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './components/navigation/navigation/navigation.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FilmsPageComponent } from './pages/films-page/films-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { PlanetsPageComponent } from './pages/planets-page/planets-page.component';
import { FooterComponent } from './components/footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomePageComponent,
    FilmsPageComponent,
    CharactersPageComponent,
    PlanetsPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
