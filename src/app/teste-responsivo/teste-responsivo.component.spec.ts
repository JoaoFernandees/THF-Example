import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteResponsivoComponent } from './teste-responsivo.component';

describe('TesteResponsivoComponent', () => {
  let component: TesteResponsivoComponent;
  let fixture: ComponentFixture<TesteResponsivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteResponsivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteResponsivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
