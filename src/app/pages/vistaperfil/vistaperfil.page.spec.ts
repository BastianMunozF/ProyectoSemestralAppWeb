import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaperfilPage } from './vistaperfil.page';

describe('VistaperfilPage', () => {
  let component: VistaperfilPage;
  let fixture: ComponentFixture<VistaperfilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VistaperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
