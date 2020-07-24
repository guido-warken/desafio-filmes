import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FilmService } from '../film.service';
import { Film } from '../Film';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
})

export class FilmDetailsComponent implements OnInit {

  film: Film;

  constructor(private _activated : ActivatedRoute, private _location : Location, private _filmService : FilmService) { }

  ngOnInit(): void {
    const id = +this._activated.snapshot.paramMap.get('id');
    this.getFilm(id);
  }

  getFilm(id: number) {
    this._filmService.listByPopularity('41f35c2bf35bf539136f4f344dd6b922').subscribe(data => this.film = data.results.find(f => f.id === id));
  }

  back() {
    this._location.back();
  }

}
