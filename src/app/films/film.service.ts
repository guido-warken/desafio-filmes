import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from './Film';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FilmService {

  constructor(private _http: HttpClient) { }

  listByPopularity() {
    const observable = this._http.get<any>(environment.listFilmsApiUrl);
    return observable;
  }

}
