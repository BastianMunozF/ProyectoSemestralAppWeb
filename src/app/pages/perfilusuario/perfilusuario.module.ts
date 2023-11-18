import { NgModule } from '@angular/core';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilusuarioPageRoutingModule } from './perfilusuario-routing.module';

import { PerfilusuarioPage } from './perfilusuario.page';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilusuarioPageRoutingModule,
    MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    NgForOf
  ],
  declarations: [PerfilusuarioPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PerfilusuarioPageModule {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
  
}
