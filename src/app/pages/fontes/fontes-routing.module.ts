import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FontesPage } from './fontes.page';

const routes: Routes = [
  {
    path: '',
    component: FontesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FontesPageRoutingModule {}
