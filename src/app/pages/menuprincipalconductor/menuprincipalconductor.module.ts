import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuprincipalconductorPageRoutingModule } from './menuprincipalconductor-routing.module';

import { MenuprincipalconductorPage } from './menuprincipalconductor.page';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuprincipalconductorPageRoutingModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  declarations: [MenuprincipalconductorPage]
})
export class MenuprincipalconductorPageModule {}
