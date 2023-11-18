import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicioconductoresPage } from './servicioconductores.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('ServicioconductoresPage', () => {
  let component: ServicioconductoresPage;
  let fixture: ComponentFixture<ServicioconductoresPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(ServicioconductoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
