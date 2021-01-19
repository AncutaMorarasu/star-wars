import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePlanetPageComponent } from './single-planet-page.component';

describe('SinglePlanetPageComponent', () => {
  let component: SinglePlanetPageComponent;
  let fixture: ComponentFixture<SinglePlanetPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePlanetPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePlanetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
