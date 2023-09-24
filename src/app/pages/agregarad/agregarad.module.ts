import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregaradPageRoutingModule } from './agregarad-routing.module';

import { AgregaradPage } from './agregarad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregaradPageRoutingModule
  ],
  declarations: [AgregaradPage]
})
export class AgregaradPageModule {}
