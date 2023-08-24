import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginarecuperarUsuarioPage } from './paginarecuperar-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: PaginarecuperarUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginarecuperarUsuarioPageRoutingModule {}
