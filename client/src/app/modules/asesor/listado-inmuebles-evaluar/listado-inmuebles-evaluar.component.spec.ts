import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoInmueblesEvaluarComponent } from './listado-inmuebles-evaluar.component';

describe('ListadoInmueblesEvaluarComponent', () => {
  let component: ListadoInmueblesEvaluarComponent;
  let fixture: ComponentFixture<ListadoInmueblesEvaluarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoInmueblesEvaluarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoInmueblesEvaluarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
