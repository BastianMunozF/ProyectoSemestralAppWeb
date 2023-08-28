import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiubicacionPage } from './miubicacion.page';

describe('MiubicacionPage', () => {
  let component: MiubicacionPage;
  let fixture: ComponentFixture<MiubicacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MiubicacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
