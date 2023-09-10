import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicioconductoresPageRoutingModule } from './servicioconductores-routing.module';

import { ServicioconductoresPage } from './servicioconductores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicioconductoresPageRoutingModule
  ],
  declarations: [ServicioconductoresPage]
})
export class ServicioconductoresPageModule {}
