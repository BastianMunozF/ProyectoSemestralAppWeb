import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarvehiculoPageRoutingModule } from './registrarvehiculo-routing.module';

import { RegistrarvehiculoPage } from './registrarvehiculo.page';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarvehiculoPageRoutingModule, 
    ReactiveFormsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  declarations: [RegistrarvehiculoPage]
})
export class RegistrarvehiculoPageModule {}
