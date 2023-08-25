import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaloginUsuarioPage } from './paginalogin-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaloginUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaloginUsuarioPageRoutingModule {}
