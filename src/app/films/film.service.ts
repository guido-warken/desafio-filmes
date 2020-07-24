import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from './Film';

@Injectable({
  providedIn: 'root'
})

export class FilmService {

  constructor(private _http: HttpClient) { }

  listByPopularity(key: string) {
    const observable = this._http.get<any>(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=pt-br&sort_by=popularity.desc`);
    return observable;
  }

}
