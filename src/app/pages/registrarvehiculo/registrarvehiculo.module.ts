import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarvehiculoPageRoutingModule } from './registrarvehiculo-routing.module';

import { RegistrarvehiculoPage } from './registrarvehiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarvehiculoPageRoutingModule, 
    ReactiveFormsModule
  ],
  declarations: [RegistrarvehiculoPage]
})
export class RegistrarvehiculoPageModule {}
