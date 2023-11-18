import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilconductorPage } from './perfilconductor.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('PerfilconductorPage', () => {
  let component: PerfilconductorPage;
  let fixture: ComponentFixture<PerfilconductorPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(PerfilconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
