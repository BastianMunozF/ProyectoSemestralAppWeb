import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialconductorPage } from './historialconductor.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('HistorialconductorPage', () => {
  let component: HistorialconductorPage;
  let fixture: ComponentFixture<HistorialconductorPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(HistorialconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
