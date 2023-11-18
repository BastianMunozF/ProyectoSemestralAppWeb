import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RutaconductorPage } from './rutaconductor.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('RutaconductorPage', () => {
  let component: RutaconductorPage;
  let fixture: ComponentFixture<RutaconductorPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(RutaconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
