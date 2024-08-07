import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialusuarioPageRoutingModule } from './historialusuario-routing.module';

import { HistorialusuarioPage } from './historialusuario.page';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialusuarioPageRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    HttpClientModule
  ],
  declarations: [HistorialusuarioPage]
})
export class HistorialusuarioPageModule {}
