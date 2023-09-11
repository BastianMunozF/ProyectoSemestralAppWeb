import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuprincipalconductorPageRoutingModule } from './menuprincipalconductor-routing.module';

import { MenuprincipalconductorPage } from './menuprincipalconductor.page';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuprincipalconductorPageRoutingModule,
    MatSlideToggleModule,
    MatChipsModule
  ],
  declarations: [MenuprincipalconductorPage]
})
export class MenuprincipalconductorPageModule {}
