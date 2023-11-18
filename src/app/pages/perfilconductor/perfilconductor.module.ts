import { NgModule } from '@angular/core';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilconductorPageRoutingModule } from './perfilconductor-routing.module';

import { PerfilconductorPage } from './perfilconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilconductorPageRoutingModule,
    NgForOf,
    NgIf
  ],
  declarations: [PerfilconductorPage]
})
export class PerfilconductorPageModule {}
