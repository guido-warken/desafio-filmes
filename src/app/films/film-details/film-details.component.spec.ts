import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetailsComponent } from './film-details.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('FilmDetailsComponent', () => {
  let component: FilmDetailsComponent;
  let fixture: ComponentFixture<FilmDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilmDetailsComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            params: { id: 583083 }
          }
        }
      }],
      imports: [HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDetailsComponent);
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
    component.genres = [{
      id: 1,
      name: 'aventura'
    },
    {
      id: 2,
      name: 'ação'
    },
    {
      id: 3,
      name: 'comédia'
    }
    ];
    fixture.detectChanges();
  });

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should show the title of film', () => {
    const titleViewElement: HTMLElement = fixture.nativeElement.querySelector('#film-title');
    expect(titleViewElement.textContent).toEqual('O beijo e a rosa');
  });

  it('should show the release date of film', () => {
    const dateViewElement: HTMLElement = fixture.nativeElement.querySelector('#film-date');
    expect(dateViewElement.textContent).toEqual(new Date().toString());
  });

  it('should show the list of genres of film', () => {
    const listOfGenresElement: HTMLElement = fixture.nativeElement.querySelector('#film-genre-list');
    expect(listOfGenresElement.childElementCount).toEqual(3);
    const genres = listOfGenresElement.querySelectorAll('li');
    expect(genres[0].textContent).toEqual('aventura');
    expect(genres[1].textContent).toEqual('ação');
    expect(genres[2].textContent).toEqual('comédia');
  });

  it('should show the original title in english of film', () => {
    const originalTitleView : HTMLElement = fixture.nativeElement.querySelector('#film-original-title');
    expect(originalTitleView.textContent).toEqual('Kiss and rose');
  });

  it('should show the number of votes of film', () => {
    const voteCountView : HTMLElement = fixture.nativeElement.querySelector("#film-vote-count");
    expect(voteCountView.textContent).toEqual('0');
  });

  it('should show the index of popularity of film', () => {
    const popularityView = fixture.nativeElement.querySelector('#film-popularity');
    expect(popularityView.textContent).toEqual('0');
  });

  it('should show the overview of film', () => {
    const overViewElement: HTMLElement = fixture.nativeElement.querySelector('#film-overview');
    expect(overViewElement.textContent).toEqual('Resumo de testes');
  });
});
