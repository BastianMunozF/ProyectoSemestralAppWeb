import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarconductorPage } from './registrarconductor.page';

describe('RegistrarconductorPage', () => {
  let component: RegistrarconductorPage;
  let fixture: ComponentFixture<RegistrarconductorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrarconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
