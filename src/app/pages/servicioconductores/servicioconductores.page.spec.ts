import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicioconductoresPage } from './servicioconductores.page';

describe('ServicioconductoresPage', () => {
  let component: ServicioconductoresPage;
  let fixture: ComponentFixture<ServicioconductoresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ServicioconductoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
