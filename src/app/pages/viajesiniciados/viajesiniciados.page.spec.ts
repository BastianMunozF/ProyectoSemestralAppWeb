import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajesiniciadosPage } from './viajesiniciados.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('ViajesiniciadosPage', () => {
  let component: ViajesiniciadosPage;
  let fixture: ComponentFixture<ViajesiniciadosPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    })
    fixture = TestBed.createComponent(ViajesiniciadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
