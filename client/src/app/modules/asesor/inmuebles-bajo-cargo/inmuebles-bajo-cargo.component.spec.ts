import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InmueblesBajoCargoComponent } from './inmuebles-bajo-cargo.component';

describe('InmueblesBajoCargoComponent', () => {
  let component: InmueblesBajoCargoComponent;
  let fixture: ComponentFixture<InmueblesBajoCargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InmueblesBajoCargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InmueblesBajoCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
