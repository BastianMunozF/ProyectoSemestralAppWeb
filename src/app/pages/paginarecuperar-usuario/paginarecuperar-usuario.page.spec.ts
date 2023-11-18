import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginarecuperarUsuarioPage } from './paginarecuperar-usuario.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('PaginarecuperarUsuarioPage', () => {
  let component: PaginarecuperarUsuarioPage;
  let fixture: ComponentFixture<PaginarecuperarUsuarioPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(PaginarecuperarUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
