import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProizvodiPage } from './proizvodi.page';

const routes: Routes = [
  {
    path: '',
    component: ProizvodiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProizvodiPageRoutingModule {}
