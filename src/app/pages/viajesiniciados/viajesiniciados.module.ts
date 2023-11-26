import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajesiniciadosPageRoutingModule } from './viajesiniciados-routing.module';

import { ViajesiniciadosPage } from './viajesiniciados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajesiniciadosPageRoutingModule
  ],
  declarations: [ViajesiniciadosPage]
})
export class ViajesiniciadosPageModule {}
