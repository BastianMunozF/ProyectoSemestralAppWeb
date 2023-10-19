import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComenzarviajePageRoutingModule } from './comenzarviaje-routing.module';

import { ComenzarviajePage } from './comenzarviaje.page';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComenzarviajePageRoutingModule,
    MatButtonModule, MatDividerModule, MatIconModule,
  ],
  declarations: [ComenzarviajePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComenzarviajePageModule {}