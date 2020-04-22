import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProizvodiPageRoutingModule } from './proizvodi-routing.module';

import { ProizvodiPage } from './proizvodi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProizvodiPageRoutingModule
  ],
  declarations: [ProizvodiPage]
})
export class ProizvodiPageModule {}
