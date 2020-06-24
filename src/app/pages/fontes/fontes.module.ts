import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FontesPageRoutingModule } from './fontes-routing.module';

import { FontesPage } from './fontes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontesPageRoutingModule
  ],
  declarations: [FontesPage]
})
export class FontesPageModule {}
