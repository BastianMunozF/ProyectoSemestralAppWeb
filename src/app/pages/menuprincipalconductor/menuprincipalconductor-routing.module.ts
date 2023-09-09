import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuprincipalconductorPage } from './menuprincipalconductor.page';

const routes: Routes = [
  {
    path: '',
    component: MenuprincipalconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuprincipalconductorPageRoutingModule {}
