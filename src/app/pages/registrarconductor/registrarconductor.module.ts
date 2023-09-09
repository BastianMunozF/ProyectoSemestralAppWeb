import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import { IonicModule } from '@ionic/angular';

import { RegistrarconductorPageRoutingModule } from './registrarconductor-routing.module';

import { RegistrarconductorPage } from './registrarconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegistrarconductorPageRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    NgFor,
    MatInputModule,
    FormsModule
  ],
  declarations: [RegistrarconductorPage]
})
export class RegistrarconductorPageModule {}
