import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';

import { SearchFilmComponent } from './search-film.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilmService } from '../film.service';

describe('SearchFilmComponent', () => {
  let component: SearchFilmComponent;
  let fixture: ComponentFixture<SearchFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchFilmComponent],
      imports: [HttpClientModule, FormsModule],
      providers: [FilmService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    TestBed.inject(FilmService);
    fixture = TestBed.createComponent(SearchFilmComponent);
    component = fixture.componentInstance;
    component.film = {
      adult: false,
      backdrop_path: '',
      genre_ids: [1, 2, 3],
      id: 1,
      original_language: 'en',
      original_title: 'Kiss and rose',
      overview: 'Resumo de testes',
      popularity: 0,
      poster_path: '',
      release_date: new Date(),
      video: false,
      vote_average: 0,
      title: 'O beijo e a rosa',
      vote_count: 0
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should view a link to film details if the film exists', () => {
    let inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input');
    let inputEvent = new Event('input');
    inputElement.value = 'O beijo e a rosa';
    inputElement.dispatchEvent(inputEvent);
    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a');
    expect(link.textContent).toContain('detalhes do filme');
  });

  it('should view a link to list of films if the film does not exist', () => {
    component.film = null;
    fixture.detectChanges();
    let inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input');
    let inputEvent = new Event('input');
    inputElement.value = 'Armas e rosas';
    inputElement.dispatchEvent(inputEvent);
    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a');
    expect(link.textContent).toContain('Ir para a lista de filmes');
  });
});
