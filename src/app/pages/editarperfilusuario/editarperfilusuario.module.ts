import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import { IonicModule } from '@ionic/angular';

import { EditarperfilusuarioPageRoutingModule } from './editarperfilusuario-routing.module';
import { EditarperfilusuarioPage } from './editarperfilusuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarperfilusuarioPageRoutingModule,
    ReactiveFormsModule,
    MatButtonModule, MatDividerModule, MatIconModule,
  ],
  declarations: [EditarperfilusuarioPage]
})
export class EditarperfilusuarioPageModule {}
