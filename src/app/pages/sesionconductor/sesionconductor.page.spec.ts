import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SesionconductorPage } from './sesionconductor.page';

describe('SesionconductorPage', () => {
  let component: SesionconductorPage;
  let fixture: ComponentFixture<SesionconductorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SesionconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
