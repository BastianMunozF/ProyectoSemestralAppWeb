import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilconductorPageRoutingModule } from './perfilconductor-routing.module';

import { PerfilconductorPage } from './perfilconductor.page';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilconductorPageRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ],
  declarations: [PerfilconductorPage]
})
export class PerfilconductorPageModule {}
