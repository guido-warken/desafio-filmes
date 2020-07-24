import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Location } from '@angular/common';
import { Film } from '../Film';

@Component({
  selector: 'app-search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.css']
})

export class SearchFilmComponent implements OnInit {

  name = '';
  film: Film;

  constructor(private _filmService: FilmService, private _location: Location) { }

  ngOnInit(): void {
  }

  search() {
    this._filmService.listByPopularity('41f35c2bf35bf539136f4f344dd6b922').subscribe(data => {
      const film = data.results.find(result => result.title == this.name);
      if (film) {
        this.film = film;
      } else {
        this.film = null;
      }
    });
  }
}
