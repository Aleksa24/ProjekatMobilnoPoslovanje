import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilIzmeniPageRoutingModule } from './profil-izmeni-routing.module';

import { ProfilIzmeniPage } from './profil-izmeni.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProfilIzmeniPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [ProfilIzmeniPage]
})
export class ProfilIzmeniPageModule {}
