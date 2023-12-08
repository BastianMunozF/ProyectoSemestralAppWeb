import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajesreservadosPageRoutingModule } from './viajesreservados-routing.module';

import { ViajesreservadosPage } from './viajesreservados.page';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajesreservadosPageRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  declarations: [ViajesreservadosPage]
})
export class ViajesreservadosPageModule {}
