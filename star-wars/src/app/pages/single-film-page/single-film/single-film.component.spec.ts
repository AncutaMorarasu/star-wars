import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFilmComponent } from './single-film.component';

describe('SingleFilmComponent', () => {
  let component: SingleFilmComponent;
  let fixture: ComponentFixture<SingleFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
