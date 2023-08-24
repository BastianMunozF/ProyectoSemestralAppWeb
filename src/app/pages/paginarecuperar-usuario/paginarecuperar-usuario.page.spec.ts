import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginarecuperarUsuarioPage } from './paginarecuperar-usuario.page';

describe('PaginarecuperarUsuarioPage', () => {
  let component: PaginarecuperarUsuarioPage;
  let fixture: ComponentFixture<PaginarecuperarUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaginarecuperarUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
