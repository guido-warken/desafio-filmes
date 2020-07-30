import { TestBed } from '@angular/core/testing';

import { GenreService } from './genre.service';
import { HttpClientModule } from '@angular/common/http';
import { Genre } from './genre';

describe('GenreService', () => {
  let service: GenreService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    service = TestBed.inject(GenreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should bring the list of genres', () => {
    service.getGenres().subscribe(data => {
      const genres : Genre[] = data.genres;
      expect(genres.length).toBeGreaterThan(0);
      expect(Object.keys(genres[0])[0]).toEqual('id');
      expect(Object.keys(genres[0])[1]).toEqual('name');
    });
  });
});
