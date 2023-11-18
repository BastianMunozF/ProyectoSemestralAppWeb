import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuprincipalPage } from './menuprincipal.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('MenuprincipalPage', () => {
  let component: MenuprincipalPage;
  let fixture: ComponentFixture<MenuprincipalPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(MenuprincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
