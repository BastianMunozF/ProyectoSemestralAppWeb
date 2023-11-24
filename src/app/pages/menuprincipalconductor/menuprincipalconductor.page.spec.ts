import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuprincipalconductorPage } from './menuprincipalconductor.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { DbserviceService } from 'src/app/services/dbservice.service';

describe('MenuprincipalconductorPage', () => {
  let component: MenuprincipalconductorPage;
  let fixture: ComponentFixture<MenuprincipalconductorPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [MenuprincipalconductorPage],
      providers: [SQLite, DbserviceService]
    }).compileComponents();
    fixture = TestBed.createComponent(MenuprincipalconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
