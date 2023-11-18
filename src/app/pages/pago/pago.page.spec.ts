import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagoPage } from './pago.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('PagoPage', () => {
  let component: PagoPage;
  let fixture: ComponentFixture<PagoPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(PagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
