import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComenzarviajePageRoutingModule } from './comenzarviaje-routing.module';

import { ComenzarviajePage } from './comenzarviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComenzarviajePageRoutingModule
  ],
  declarations: [ComenzarviajePage]
})
export class ComenzarviajePageModule {}
