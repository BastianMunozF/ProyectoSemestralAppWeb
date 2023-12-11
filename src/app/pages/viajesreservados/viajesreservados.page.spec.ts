import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajesreservadosPage } from './viajesreservados.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('ViajesreservadosPage', () => {
  let component: ViajesreservadosPage;
  let fixture: ComponentFixture<ViajesreservadosPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(ViajesreservadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
