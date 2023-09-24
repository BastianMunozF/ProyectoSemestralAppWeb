import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificaradPageRoutingModule } from './modificarad-routing.module';

import { ModificaradPage } from './modificarad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificaradPageRoutingModule
  ],
  declarations: [ModificaradPage]
})
export class ModificaradPageModule {}
