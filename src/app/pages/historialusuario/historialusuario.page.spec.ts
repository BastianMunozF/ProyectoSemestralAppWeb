import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialusuarioPage } from './historialusuario.page';

describe('HistorialusuarioPage', () => {
  let component: HistorialusuarioPage;
  let fixture: ComponentFixture<HistorialusuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HistorialusuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
