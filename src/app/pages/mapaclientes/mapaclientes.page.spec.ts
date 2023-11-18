import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapaclientesPage } from './mapaclientes.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('MapaclientesPage', () => {
  let component: MapaclientesPage;
  let fixture: ComponentFixture<MapaclientesPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(MapaclientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
