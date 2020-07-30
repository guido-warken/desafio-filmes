import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Genre } from './genre';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private _http: HttpClient) { }

  getGenres() {
    return this._http.get<any>(environment.listGenresApiUrl);
  }
}
