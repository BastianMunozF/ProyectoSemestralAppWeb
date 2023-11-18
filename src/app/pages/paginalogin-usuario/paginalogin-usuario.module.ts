import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaloginUsuarioPageRoutingModule } from './paginalogin-usuario-routing.module';

import { PaginaloginUsuarioPage } from './paginalogin-usuario.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PaginaloginUsuarioPageRoutingModule
  ],
  declarations: [PaginaloginUsuarioPage]
})
export class PaginaloginUsuarioPageModule {}
