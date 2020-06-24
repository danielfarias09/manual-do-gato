import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiadoPage } from './miado.page';

const routes: Routes = [
  {
    path: '',
    component: MiadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiadoPageRoutingModule {}
