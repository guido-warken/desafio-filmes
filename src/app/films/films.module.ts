import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilmListComponent } from './film-list/film-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { AppRoutingModule } from '../app-routing.module';
import { SearchFilmComponent } from './search-film/search-film.component';

@NgModule({
  declarations: [FilmListComponent, FilmDetailsComponent, SearchFilmComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class FilmsModule { }
