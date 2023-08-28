import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComenzarviajePage } from './comenzarviaje.page';

const routes: Routes = [
  {
    path: '',
    component: ComenzarviajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComenzarviajePageRoutingModule {}
