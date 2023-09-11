import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapaclientesPage } from './mapaclientes.page';

describe('MapaclientesPage', () => {
  let component: MapaclientesPage;
  let fixture: ComponentFixture<MapaclientesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MapaclientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
