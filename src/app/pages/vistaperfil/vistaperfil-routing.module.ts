import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaperfilPage } from './vistaperfil.page';

const routes: Routes = [
  {
    path: '',
    component: VistaperfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaperfilPageRoutingModule {}
