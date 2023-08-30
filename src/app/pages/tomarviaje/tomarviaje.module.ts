import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TomarviajePageRoutingModule } from './tomarviaje-routing.module';

import { TomarviajePage } from './tomarviaje.page';
import { Componente1Component } from 'src/app/components/componente1/componente1.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TomarviajePageRoutingModule
  ],
  declarations: [TomarviajePage, Componente1Component]
})
export class TomarviajePageModule {}
