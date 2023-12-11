import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajescursoPage } from './viajescurso.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('ViajescursoPage', () => {
  let component: ViajescursoPage;
  let fixture: ComponentFixture<ViajescursoPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(ViajescursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
