import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaconductoresPage } from './mapaconductores.page';

const routes: Routes = [
  {
    path: '',
    component: MapaconductoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaconductoresPageRoutingModule {}
