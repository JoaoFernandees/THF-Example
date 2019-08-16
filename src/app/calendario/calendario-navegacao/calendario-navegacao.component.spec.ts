import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioNavegacaoComponent } from './calendario-navegacao.component';

describe('CalendarioNavegacaoComponent', () => {
  let component: CalendarioNavegacaoComponent;
  let fixture: ComponentFixture<CalendarioNavegacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioNavegacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioNavegacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
