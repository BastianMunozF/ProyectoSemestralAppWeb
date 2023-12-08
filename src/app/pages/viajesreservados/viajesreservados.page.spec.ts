import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajesreservadosPage } from './viajesreservados.page';

describe('ViajesreservadosPage', () => {
  let component: ViajesreservadosPage;
  let fixture: ComponentFixture<ViajesreservadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViajesreservadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
