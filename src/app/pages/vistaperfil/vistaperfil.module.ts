import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaperfilPageRoutingModule } from './vistaperfil-routing.module';

import { VistaperfilPage } from './vistaperfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaperfilPageRoutingModule
  ],
  declarations: [VistaperfilPage]
})
export class VistaperfilPageModule {}
