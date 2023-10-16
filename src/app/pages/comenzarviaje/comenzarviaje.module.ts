import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComenzarviajePageRoutingModule } from './comenzarviaje-routing.module';

import { ComenzarviajePage } from './comenzarviaje.page';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComenzarviajePageRoutingModule,
    MatButtonModule, MatDividerModule, MatIconModule
  ],
  declarations: [ComenzarviajePage]
})
export class ComenzarviajePageModule {}