import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarperfilusuarioPage } from './editarperfilusuario.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('EditarperfilusuarioPage', () => {
  let component: EditarperfilusuarioPage;
  let fixture: ComponentFixture<EditarperfilusuarioPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(EditarperfilusuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
