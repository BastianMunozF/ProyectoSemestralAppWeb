import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarcontrasenaPage } from './modificarcontrasena.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('ModificarcontrasenaPage', () => {
  let component: ModificarcontrasenaPage;
  let fixture: ComponentFixture<ModificarcontrasenaPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(ModificarcontrasenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
