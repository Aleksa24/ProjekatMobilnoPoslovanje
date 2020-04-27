import { Component, OnInit } from '@angular/core';

import {ModalController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { KorpaService } from './services/korpa.service';
import {BehaviorSubject} from 'rxjs';
import {KorpaPage} from './pages/korpa/korpa.page';
import { AuthenticationService } from './services/autentification/authentication.service';
import { Router } from '@angular/router';

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
    private modalCtrl: ModalController,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authService.autenticationState.subscribe((state) =>{
        console.log('auth changed: ' + state)
        if(state){
          //jeste autentifikovan: // postaviti u side menu onoga ko je ulogovan i omoguciti da se logout uradi
          this.router.navigate(['home']);
        }else{
          //nije autentifikovan
          this.router.navigate(['login']);
        }
      });
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

  logout(){
    this.authService.logout();
  }

  isLogedIn(){
    return this.authService.isAuthanticated();
  }
}
