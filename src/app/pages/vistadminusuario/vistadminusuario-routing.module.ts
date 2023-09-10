import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistadminusuarioPage } from './vistadminusuario.page';

const routes: Routes = [
  {
    path: '',
    component: VistadminusuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistadminusuarioPageRoutingModule {}
