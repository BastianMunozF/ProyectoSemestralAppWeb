import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialusuarioPageRoutingModule } from './historialusuario-routing.module';

import { HistorialusuarioPage } from './historialusuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialusuarioPageRoutingModule
  ],
  declarations: [HistorialusuarioPage]
})
export class HistorialusuarioPageModule {}
