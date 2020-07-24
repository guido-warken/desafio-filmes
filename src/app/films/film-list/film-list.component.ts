import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../Film';

@Component({
  selector: 'des-film-list',
  templateUrl: './film-list.component.html',
})

export class FilmListComponent implements OnInit {

  films: Film[];

  constructor(private _filmService: FilmService) { }

  ngOnInit(): void {
    this._filmService.listByPopularity('41f35c2bf35bf539136f4f344dd6b922').subscribe(data => {
      this.films = data.results;
      console.log(data.results);
    });
  }

}
