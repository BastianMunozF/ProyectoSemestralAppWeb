import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarperfilconductorPage } from './editarperfilconductor.page';

const routes: Routes = [
  {
    path: '',
    component: EditarperfilconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarperfilconductorPageRoutingModule {}
