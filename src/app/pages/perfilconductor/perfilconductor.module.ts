import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilconductorPageRoutingModule } from './perfilconductor-routing.module';

import { PerfilconductorPage } from './perfilconductor.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilconductorPageRoutingModule
  ],
  declarations: [PerfilconductorPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PerfilconductorPageModule {}
