import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicioconductoresPage } from './servicioconductores.page';

const routes: Routes = [
  {
    path: '',
    component: ServicioconductoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicioconductoresPageRoutingModule {}
