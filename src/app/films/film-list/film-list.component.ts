import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../Film';
import { MessageService } from 'src/app/messages/message.service';

@Component({
  selector: 'des-film-list',
  templateUrl: './film-list.component.html',
})

export class FilmListComponent implements OnInit {

  films: Film[];

  constructor(readonly _filmService: FilmService, readonly messageService : MessageService) { }

  ngOnInit(): void {
    this._filmService.listByPopularity().subscribe(data => {
      this.films = data.results;
      this.messageService.add(`Foram carregados ${data.results.length} filmes. Navegue com as setas pela lista de filmes e pressione enter para selecionar um filme`);
      this.clearMessages();
    });
  }

  clearMessages() {
    setTimeout(() => {
      this.messageService.clear();
    }, 3000);
  }

  showAccessibleMessage(film : Film) {
    this.messageService.add(`Você clicou no filme ${film.title}. Navegue com as setas pela página para ler seus detalhes`);
    this.clearMessages();
  }
}
