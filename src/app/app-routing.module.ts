import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmListComponent } from './films/film-list/film-list.component';
import { FilmDetailsComponent } from './films/film-details/film-details.component';
import { SearchFilmComponent } from './films/search-film/search-film.component';

const routes: Routes = [{
  path: 'list',
  component: FilmListComponent
},
{
  path: 'detail/:id',
  component: FilmDetailsComponent
},
{
  path: 'search',
  component: SearchFilmComponent
},
{
  path: '',
  redirectTo: '/list',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
