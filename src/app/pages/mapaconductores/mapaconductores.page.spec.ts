import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapaconductoresPage } from './mapaconductores.page';

describe('MapaconductoresPage', () => {
  let component: MapaconductoresPage;
  let fixture: ComponentFixture<MapaconductoresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MapaconductoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
