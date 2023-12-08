import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajesreservadosPage } from './viajesreservados.page';

const routes: Routes = [
  {
    path: '',
    component: ViajesreservadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajesreservadosPageRoutingModule {}
