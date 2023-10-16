import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialusuarioPage } from './historialusuario.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialusuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialusuarioPageRoutingModule {}
