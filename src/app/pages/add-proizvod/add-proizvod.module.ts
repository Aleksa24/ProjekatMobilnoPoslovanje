import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProizvodPageRoutingModule } from './add-proizvod-routing.module';

import { AddProizvodPage } from './add-proizvod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProizvodPageRoutingModule
  ],
  declarations: [AddProizvodPage]
})
export class AddProizvodPageModule {}
