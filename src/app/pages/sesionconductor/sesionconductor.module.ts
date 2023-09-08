import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SesionconductorPageRoutingModule } from './sesionconductor-routing.module';

import { SesionconductorPage } from './sesionconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SesionconductorPageRoutingModule
  ],
  declarations: [SesionconductorPage]
})
export class SesionconductorPageModule {}
