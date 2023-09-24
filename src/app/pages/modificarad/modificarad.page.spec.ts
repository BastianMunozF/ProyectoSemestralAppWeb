import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificaradPage } from './modificarad.page';

describe('ModificaradPage', () => {
  let component: ModificaradPage;
  let fixture: ComponentFixture<ModificaradPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModificaradPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
