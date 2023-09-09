import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuprincipalconductorPage } from './menuprincipalconductor.page';

describe('MenuprincipalconductorPage', () => {
  let component: MenuprincipalconductorPage;
  let fixture: ComponentFixture<MenuprincipalconductorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuprincipalconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
