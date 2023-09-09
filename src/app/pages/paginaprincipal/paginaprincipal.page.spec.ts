import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaprincipalPage } from './paginaprincipal.page';

describe('PaginaprincipalPage', () => {
  let component: PaginaprincipalPage;
  let fixture: ComponentFixture<PaginaprincipalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaginaprincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
