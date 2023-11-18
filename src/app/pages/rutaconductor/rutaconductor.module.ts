import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { RutaconductorPageRoutingModule } from './rutaconductor-routing.module';

import { RutaconductorPage } from './rutaconductor.page';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RutaconductorPageRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ],
  declarations: [RutaconductorPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RutaconductorPageModule {}
