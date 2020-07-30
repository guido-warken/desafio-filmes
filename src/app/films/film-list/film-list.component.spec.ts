import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmListComponent } from './film-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmService } from '../film.service';

describe('FilmListComponent', () => {
  let component: FilmListComponent;
  let fixture: ComponentFixture<FilmListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilmListComponent],
      imports: [HttpClientModule],
      providers: [FilmService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmListComponent);
    component = fixture.componentInstance;
    component.films = [{
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
    }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the list of films', () => {
    fixture.detectChanges();
    const listFilmsElement : HTMLElement = fixture.nativeElement.querySelector('.list-group');
    expect(listFilmsElement.childElementCount).toEqual(1);
    expect(listFilmsElement.getAttribute('role')).toEqual('list');
    const listItem : HTMLElement = <HTMLElement> listFilmsElement.querySelectorAll('.list-group-item')[0];
    expect(listItem.tagName).toEqual('A');
  });
});
