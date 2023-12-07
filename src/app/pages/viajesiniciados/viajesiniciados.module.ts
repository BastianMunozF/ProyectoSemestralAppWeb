import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajesiniciadosPageRoutingModule } from './viajesiniciados-routing.module';

import { ViajesiniciadosPage } from './viajesiniciados.page';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajesiniciadosPageRoutingModule, 
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  declarations: [ViajesiniciadosPage]
})
export class ViajesiniciadosPageModule {}
