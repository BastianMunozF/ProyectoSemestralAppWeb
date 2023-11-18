import { NgModule } from '@angular/core';
import { CommonModule, NgIf, NgForOf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaregistrarUsuarioPageRoutingModule } from './paginaregistrar-usuario-routing.module';

import { PaginaregistrarUsuarioPage } from './paginaregistrar-usuario.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PaginaregistrarUsuarioPageRoutingModule,
    NgForOf,
    NgIf
  ],
  declarations: [PaginaregistrarUsuarioPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaginaregistrarUsuarioPageModule {}
