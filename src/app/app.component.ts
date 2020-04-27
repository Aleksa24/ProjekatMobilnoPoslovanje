import { Component, OnInit } from '@angular/core';

import {ModalController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { KorpaService } from './services/korpa.service';
import {BehaviorSubject} from 'rxjs';
import {KorpaPage} from './pages/korpa/korpa.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  cartItemCount: BehaviorSubject<number>;

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Profil',
      url: 'profil',
    }
    // ,
    // {
    //   title: 'Outbox',
    //   url: '/folder/Outbox',
    // },
    // {
    //   title: 'Favorites',
    //   url: '/folder/Favorites',
    // },
    // {
    //   title: 'Archived',
    //   url: '/folder/Archived',
    // },
    // {
    //   title: 'Trash',
    //   url: '/folder/Trash',
    // },
    // {
    //   title: 'Spam',
    //   url: '/folder/Spam',
    // }
  ];



  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private cartService: KorpaService,
    private modalCtrl: ModalController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
   // const path = window.location.pathname.split('folder/')[1];
   //  if (path !== undefined) {
   //    this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
   //  }
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  async openCart() {
      let modal = await this.modalCtrl.create({
        component: KorpaPage,
        cssClass: 'cart-modal'
      });
      modal.present();
  }

}
