import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsLinkComponent } from './starships-link.component';

describe('StarshipsLinkComponent', () => {
  let component: StarshipsLinkComponent;
  let fixture: ComponentFixture<StarshipsLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipsLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
