import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinguagemCorporalPage } from './linguagem-corporal.page';

const routes: Routes = [
  {
    path: '',
    component: LinguagemCorporalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinguagemCorporalPageRoutingModule {}
