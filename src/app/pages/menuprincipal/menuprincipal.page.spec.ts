import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuprincipalPage } from './menuprincipal.page';
import { ApiService } from 'src/app/services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('MenuprincipalPage', () => {
  let component: MenuprincipalPage;
  let fixture: ComponentFixture<MenuprincipalPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [MenuprincipalPage], 
      providers: [ApiService, SQLite],
    }).compileComponents();
    fixture = TestBed.createComponent(MenuprincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
