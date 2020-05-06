import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiViComponent } from './mi-vi.component';

describe('MiViComponent', () => {
  let component: MiViComponent;
  let fixture: ComponentFixture<MiViComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiViComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiViComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
