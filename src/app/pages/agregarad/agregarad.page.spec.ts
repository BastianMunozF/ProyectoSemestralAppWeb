import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregaradPage } from './agregarad.page';

describe('AgregaradPage', () => {
  let component: AgregaradPage;
  let fixture: ComponentFixture<AgregaradPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregaradPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
