import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaregistrarUsuarioPage } from './paginaregistrar-usuario.page';

describe('PaginaregistrarUsuarioPage', () => {
  let component: PaginaregistrarUsuarioPage;
  let fixture: ComponentFixture<PaginaregistrarUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaginaregistrarUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
