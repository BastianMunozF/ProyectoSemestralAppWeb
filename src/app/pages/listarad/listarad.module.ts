import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaradPageRoutingModule } from './listarad-routing.module';

import { ListaradPage } from './listarad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaradPageRoutingModule
  ],
  declarations: [ListaradPage]
})
export class ListaradPageModule {}
