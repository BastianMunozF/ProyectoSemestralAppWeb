import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarvehiculoPage } from './registrarvehiculo.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('RegistrarvehiculoPage', () => {
  let component: RegistrarvehiculoPage;
  let fixture: ComponentFixture<RegistrarvehiculoPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(RegistrarvehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
