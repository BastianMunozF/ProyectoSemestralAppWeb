import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaloginUsuarioPage } from './paginalogin-usuario.page';

describe('PaginaloginUsuarioPage', () => {
  let component: PaginaloginUsuarioPage;
  let fixture: ComponentFixture<PaginaloginUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaginaloginUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
