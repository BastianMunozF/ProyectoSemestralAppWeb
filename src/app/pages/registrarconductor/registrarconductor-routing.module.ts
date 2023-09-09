import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarconductorPage } from './registrarconductor.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarconductorPageRoutingModule {}
