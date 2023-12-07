import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarperfilconductorPageRoutingModule } from './editarperfilconductor-routing.module';

import { EditarperfilconductorPage } from './editarperfilconductor.page';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditarperfilconductorPageRoutingModule, 
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  declarations: [EditarperfilconductorPage]
})
export class EditarperfilconductorPageModule {}
