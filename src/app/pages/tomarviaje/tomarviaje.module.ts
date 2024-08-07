import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TomarviajePageRoutingModule } from './tomarviaje-routing.module';

import { TomarviajePage } from './tomarviaje.page';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TomarviajePageRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  declarations: [TomarviajePage]
})
export class TomarviajePageModule {}
