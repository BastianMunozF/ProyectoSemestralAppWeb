import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialusuarioPage } from './historialusuario.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('HistorialusuarioPage', () => {
  let component: HistorialusuarioPage;
  let fixture: ComponentFixture<HistorialusuarioPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(HistorialusuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
