import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaprincipalPageRoutingModule } from './paginaprincipal-routing.module';

import { PaginaprincipalPage } from './paginaprincipal.page';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaprincipalPageRoutingModule,
    MatSlideToggleModule
  ],
  declarations: [PaginaprincipalPage]
})
export class PaginaprincipalPageModule {}
