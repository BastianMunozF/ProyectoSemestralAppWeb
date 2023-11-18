import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarperfilconductorPage } from './editarperfilconductor.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('EditarperfilconductorPage', () => {
  let component: EditarperfilconductorPage;
  let fixture: ComponentFixture<EditarperfilconductorPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(EditarperfilconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
