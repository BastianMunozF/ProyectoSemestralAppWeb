import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistadminusuarioPage } from './vistadminusuario.page';

describe('VistadminusuarioPage', () => {
  let component: VistadminusuarioPage;
  let fixture: ComponentFixture<VistadminusuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VistadminusuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
