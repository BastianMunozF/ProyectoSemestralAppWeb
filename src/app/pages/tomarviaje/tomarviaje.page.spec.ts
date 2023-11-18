import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TomarviajePage } from './tomarviaje.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('TomarviajePage', () => {
  let component: TomarviajePage;
  let fixture: ComponentFixture<TomarviajePage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(TomarviajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
