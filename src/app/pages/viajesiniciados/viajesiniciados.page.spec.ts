import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajesiniciadosPage } from './viajesiniciados.page';

describe('ViajesiniciadosPage', () => {
  let component: ViajesiniciadosPage;
  let fixture: ComponentFixture<ViajesiniciadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViajesiniciadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
