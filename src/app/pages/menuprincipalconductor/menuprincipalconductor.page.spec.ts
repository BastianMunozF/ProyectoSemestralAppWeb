import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuprincipalconductorPage } from './menuprincipalconductor.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('MenuprincipalconductorPage', () => {
  let component: MenuprincipalconductorPage;
  let fixture: ComponentFixture<MenuprincipalconductorPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(MenuprincipalconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
