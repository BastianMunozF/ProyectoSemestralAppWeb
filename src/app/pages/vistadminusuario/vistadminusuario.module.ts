import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistadminusuarioPageRoutingModule } from './vistadminusuario-routing.module';

import { VistadminusuarioPage } from './vistadminusuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistadminusuarioPageRoutingModule
  ],
  declarations: [VistadminusuarioPage]
})
export class VistadminusuarioPageModule {}
