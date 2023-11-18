import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaloginUsuarioPage } from './paginalogin-usuario.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('PaginaloginUsuarioPage', () => {
  let component: PaginaloginUsuarioPage;
  let fixture: ComponentFixture<PaginaloginUsuarioPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(PaginaloginUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
