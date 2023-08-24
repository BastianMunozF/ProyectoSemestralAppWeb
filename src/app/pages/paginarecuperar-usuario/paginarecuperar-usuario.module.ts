import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginarecuperarUsuarioPageRoutingModule } from './paginarecuperar-usuario-routing.module';

import { PaginarecuperarUsuarioPage } from './paginarecuperar-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginarecuperarUsuarioPageRoutingModule
  ],
  declarations: [PaginarecuperarUsuarioPage]
})
export class PaginarecuperarUsuarioPageModule {}
