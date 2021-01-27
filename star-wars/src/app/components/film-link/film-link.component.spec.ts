import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmLinkComponent } from './film-link.component';

describe('FilmLinkComponent', () => {
  let component: FilmLinkComponent;
  let fixture: ComponentFixture<FilmLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
