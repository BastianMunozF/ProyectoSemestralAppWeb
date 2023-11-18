import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaregistrarUsuarioPage } from './paginaregistrar-usuario.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('PaginaregistrarUsuarioPage', () => {
  let component: PaginaregistrarUsuarioPage;
  let fixture: ComponentFixture<PaginaregistrarUsuarioPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(PaginaregistrarUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
