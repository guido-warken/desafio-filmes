import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Location } from '@angular/common';
import { Film } from '../Film';
import { MessageService } from 'src/app/messages/message.service';

@Component({
  selector: 'app-search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.css']
})

export class SearchFilmComponent implements OnInit {

  name = '';
  film: Film;

  constructor(private _filmService: FilmService, private _messageService : MessageService, private _location: Location) { }

  ngOnInit(): void {
    this._messageService.add('tela de pesquisa de filmes');
    this.clearMessages();
  }

  search() {
    this._filmService.listByPopularity().subscribe(data => {
      const film = data.results.find(result => result.title == this.name);
      if (film) {
        this.film = film;
this._messageService.add('Sua pesquisa encontrou o filme solicitado');
      } else {
        this.film = null;
        this._messageService.add('Sua pesquisa não retornou nenhum filme');
      }
      this.clearMessages();
    });
  }

  clearMessages() {
setTimeout(() => {
  this._messageService.clear();
}, 3000);
  }
}
