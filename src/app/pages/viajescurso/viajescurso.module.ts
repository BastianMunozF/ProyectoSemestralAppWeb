import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajescursoPageRoutingModule } from './viajescurso-routing.module';

import { ViajescursoPage } from './viajescurso.page';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajescursoPageRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  declarations: [ViajescursoPage]
})
export class ViajescursoPageModule {}
