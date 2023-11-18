import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TomarviajePageRoutingModule } from './tomarviaje-routing.module';

import { TomarviajePage } from './tomarviaje.page';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
  declarations: [TomarviajePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TomarviajePageModule {}
