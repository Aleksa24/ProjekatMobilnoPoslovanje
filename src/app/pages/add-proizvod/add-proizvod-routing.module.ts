import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProizvodPage } from './add-proizvod.page';

const routes: Routes = [
  {
    path: '',
    component: AddProizvodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProizvodPageRoutingModule {}
