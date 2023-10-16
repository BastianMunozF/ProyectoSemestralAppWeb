import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { PaginarecuperarUsuarioPageRoutingModule } from './paginarecuperar-usuario-routing.module';

import { PaginarecuperarUsuarioPage } from './paginarecuperar-usuario.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PaginarecuperarUsuarioPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PaginarecuperarUsuarioPage]
})
export class PaginarecuperarUsuarioPageModule {}
