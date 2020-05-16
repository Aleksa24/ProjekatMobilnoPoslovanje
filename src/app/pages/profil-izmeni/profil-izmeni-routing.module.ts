import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilIzmeniPage } from './profil-izmeni.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilIzmeniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilIzmeniPageRoutingModule {}
