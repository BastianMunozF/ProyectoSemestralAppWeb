import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaregistrarUsuarioPage } from './paginaregistrar-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaregistrarUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaregistrarUsuarioPageRoutingModule {}
