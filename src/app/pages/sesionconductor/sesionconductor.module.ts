import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SesionconductorPageRoutingModule } from './sesionconductor-routing.module';

import { SesionconductorPage } from './sesionconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SesionconductorPageRoutingModule
  ],
  declarations: [SesionconductorPage]
})
export class SesionconductorPageModule {}
