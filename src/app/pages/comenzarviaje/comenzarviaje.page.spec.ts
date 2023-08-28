import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComenzarviajePage } from './comenzarviaje.page';

describe('ComenzarviajePage', () => {
  let component: ComenzarviajePage;
  let fixture: ComponentFixture<ComenzarviajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComenzarviajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
