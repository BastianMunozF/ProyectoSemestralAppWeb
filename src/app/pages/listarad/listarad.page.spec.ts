import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaradPage } from './listarad.page';

describe('ListaradPage', () => {
  let component: ListaradPage;
  let fixture: ComponentFixture<ListaradPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaradPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
