import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregaradPage } from './agregarad.page';

const routes: Routes = [
  {
    path: '',
    component: AgregaradPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregaradPageRoutingModule {}
