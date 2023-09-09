import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuprincipalconductorPageRoutingModule } from './menuprincipalconductor-routing.module';

import { MenuprincipalconductorPage } from './menuprincipalconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuprincipalconductorPageRoutingModule
  ],
  declarations: [MenuprincipalconductorPage]
})
export class MenuprincipalconductorPageModule {}
