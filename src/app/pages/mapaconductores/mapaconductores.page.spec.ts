import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapaconductoresPage } from './mapaconductores.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('MapaconductoresPage', () => {
  let component: MapaconductoresPage;
  let fixture: ComponentFixture<MapaconductoresPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(MapaconductoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
