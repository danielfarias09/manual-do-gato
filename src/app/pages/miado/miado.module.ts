import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiadoPageRoutingModule } from './miado-routing.module';

import { MiadoPage } from './miado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiadoPageRoutingModule
  ],
  declarations: [MiadoPage]
})
export class MiadoPageModule {}
