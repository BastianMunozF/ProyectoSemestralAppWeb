import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajescursoPage } from './viajescurso.page';

describe('ViajescursoPage', () => {
  let component: ViajescursoPage;
  let fixture: ComponentFixture<ViajescursoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViajescursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
