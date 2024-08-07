import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { RutaconductorPageRoutingModule } from './rutaconductor-routing.module';

import { RutaconductorPage } from './rutaconductor.page';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RutaconductorPageRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule
  ],
  declarations: [RutaconductorPage]
})
export class RutaconductorPageModule {}