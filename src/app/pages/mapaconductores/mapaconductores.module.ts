import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaconductoresPageRoutingModule } from './mapaconductores-routing.module';

import { MapaconductoresPage } from './mapaconductores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaconductoresPageRoutingModule
  ],
  declarations: [MapaconductoresPage]
})
export class MapaconductoresPageModule {}
