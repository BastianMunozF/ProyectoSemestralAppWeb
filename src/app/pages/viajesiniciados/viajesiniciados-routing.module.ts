import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajesiniciadosPage } from './viajesiniciados.page';

const routes: Routes = [
  {
    path: '',
    component: ViajesiniciadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajesiniciadosPageRoutingModule {}
