import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComenzarviajePage } from './comenzarviaje.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('ComenzarviajePage', () => {
  let component: ComenzarviajePage;
  let fixture: ComponentFixture<ComenzarviajePage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();

    fixture = TestBed.createComponent(ComenzarviajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
