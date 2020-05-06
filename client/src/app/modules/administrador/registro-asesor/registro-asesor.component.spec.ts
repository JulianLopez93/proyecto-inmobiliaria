import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAsesorComponent } from './registro-asesor.component';

describe('RegistroAsesorComponent', () => {
  let component: RegistroAsesorComponent;
  let fixture: ComponentFixture<RegistroAsesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroAsesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
