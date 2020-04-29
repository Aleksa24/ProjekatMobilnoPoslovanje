import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pretraga',
  templateUrl: './pretraga.page.html',
  styleUrls: ['./pretraga.page.scss'],
})
export class PretragaPage implements OnInit {

  constructor(
              private appComponent: AppComponent,
              private modalCtrl: ModalController
              ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.appComponent.isCartVisible = true;
  }

}
