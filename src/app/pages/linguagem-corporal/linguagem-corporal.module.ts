import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LinguagemCorporalPageRoutingModule } from './linguagem-corporal-routing.module';

import { LinguagemCorporalPage } from './linguagem-corporal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LinguagemCorporalPageRoutingModule
  ],
  declarations: [LinguagemCorporalPage]
})
export class LinguagemCorporalPageModule {}
