import { TestBed } from '@angular/core/testing';

import { FilmService } from './film.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';

describe('FilmService', () => {
  let service: FilmService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [HttpClient], imports: [HttpClientModule]});
    service = TestBed.inject(FilmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should bring the list of films', () => {
    service.listByPopularity().subscribe(data => expect(data.results.length).toEqual(20));
  });
});
