import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesLinkComponent } from './vehicles-link.component';

describe('VehiclesLinkComponent', () => {
  let component: VehiclesLinkComponent;
  let fixture: ComponentFixture<VehiclesLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
