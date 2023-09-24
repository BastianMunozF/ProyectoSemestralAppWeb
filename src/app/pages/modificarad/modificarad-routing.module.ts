import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificaradPage } from './modificarad.page';

const routes: Routes = [
  {
    path: '',
    component: ModificaradPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificaradPageRoutingModule {}
