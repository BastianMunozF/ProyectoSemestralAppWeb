import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaradPage } from './listarad.page';

const routes: Routes = [
  {
    path: '',
    component: ListaradPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaradPageRoutingModule {}
