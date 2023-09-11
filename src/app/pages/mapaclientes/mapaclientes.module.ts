import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaclientesPageRoutingModule } from './mapaclientes-routing.module';

import { MapaclientesPage } from './mapaclientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaclientesPageRoutingModule
  ],
  declarations: [MapaclientesPage]
})
export class MapaclientesPageModule {}
