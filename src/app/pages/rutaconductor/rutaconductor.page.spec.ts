import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RutaconductorPage } from './rutaconductor.page';

describe('RutaconductorPage', () => {
  let component: RutaconductorPage;
  let fixture: ComponentFixture<RutaconductorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RutaconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
