import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutaconductorPage } from './rutaconductor.page';

const routes: Routes = [
  {
    path: '',
    component: RutaconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutaconductorPageRoutingModule {}
