import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaregistrarUsuarioPageRoutingModule } from './paginaregistrar-usuario-routing.module';

import { PaginaregistrarUsuarioPage } from './paginaregistrar-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaregistrarUsuarioPageRoutingModule
  ],
  declarations: [PaginaregistrarUsuarioPage]
})
export class PaginaregistrarUsuarioPageModule {}
