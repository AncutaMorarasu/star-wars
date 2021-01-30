import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsLinkComponent } from './planets-link.component';

describe('PlanetsLinkComponent', () => {
  let component: PlanetsLinkComponent;
  let fixture: ComponentFixture<PlanetsLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
