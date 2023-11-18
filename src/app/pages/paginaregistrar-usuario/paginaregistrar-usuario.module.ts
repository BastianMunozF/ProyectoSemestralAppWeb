import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaregistrarUsuarioPageRoutingModule } from './paginaregistrar-usuario-routing.module';

import { PaginaregistrarUsuarioPage } from './paginaregistrar-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PaginaregistrarUsuarioPageRoutingModule
  ],
  declarations: [PaginaregistrarUsuarioPage],
})
export class PaginaregistrarUsuarioPageModule {}
