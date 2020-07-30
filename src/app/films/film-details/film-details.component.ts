import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FilmService } from '../film.service';
import { GenreService } from '../genre.service';
import { Film } from '../Film';
import { Genre } from '../genre';
import { MessageService } from 'src/app/messages/message.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
})

export class FilmDetailsComponent implements OnInit {

  film: Film;
  genres: Genre[];

  constructor(private _activated: ActivatedRoute, private _location: Location, private _filmService: FilmService, private _genreService: GenreService, private _messageService : MessageService) { }

  ngOnInit(): void {
    const id = +this._activated.snapshot.params.id;
    this.getFilm(id);
  }

  getFilm(id: number) {
    this._filmService
      .listByPopularity()
      .subscribe(data => {
        const film: Film = data.results.find(f => f.id === id);
        this.getGenres(film.genre_ids);
        this.film = film;
        this._messageService.add('Tela dos detalhes do filme');
        this.clearMessages();
      });
  }

  clearMessages() {
    setTimeout(() => {
      this._messageService.clear();
    }, 3000);
  }

  getGenres(genre_ids: number[]) {
    this._genreService
      .getGenres()
      .subscribe(data =>
        this.genres = data
          .genres.filter(g =>
            genre_ids.some(id => g.id == id)));
  }

  back() {
    this._location.back();
  }

}
