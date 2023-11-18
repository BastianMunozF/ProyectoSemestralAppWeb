import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaloginUsuarioPageRoutingModule } from './paginalogin-usuario-routing.module';

import { PaginaloginUsuarioPage } from './paginalogin-usuario.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PaginaloginUsuarioPageRoutingModule
  ],
  declarations: [PaginaloginUsuarioPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaginaloginUsuarioPageModule {}
