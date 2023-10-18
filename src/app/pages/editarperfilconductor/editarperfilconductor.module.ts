import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarperfilconductorPageRoutingModule } from './editarperfilconductor-routing.module';

import { EditarperfilconductorPage } from './editarperfilconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditarperfilconductorPageRoutingModule
  ],
  declarations: [EditarperfilconductorPage]
})
export class EditarperfilconductorPageModule {}
