import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCharacterPageComponent } from './single-character-page.component';

describe('SingleCharacterPageComponent', () => {
  let component: SingleCharacterPageComponent;
  let fixture: ComponentFixture<SingleCharacterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCharacterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCharacterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
