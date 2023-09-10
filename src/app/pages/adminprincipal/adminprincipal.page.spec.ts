import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminprincipalPage } from './adminprincipal.page';

describe('AdminprincipalPage', () => {
  let component: AdminprincipalPage;
  let fixture: ComponentFixture<AdminprincipalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminprincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
