import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SesionconductorPage } from './sesionconductor.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('SesionconductorPage', () => {
  let component: SesionconductorPage;
  let fixture: ComponentFixture<SesionconductorPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(SesionconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
