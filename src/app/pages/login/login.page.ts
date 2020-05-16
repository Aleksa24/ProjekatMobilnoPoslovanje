import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/autentification/authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private email: string = 'pera@gmail.com';
  private password: string = 'pera123';

  constructor(private authService: AuthenticationService,
               private appComponent:AppComponent,
               public afAuth: AngularFireAuth,
              private alert: AlertController) {
  }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.appComponent.isCartVisible = false;
  }

  async login(){
      this.authService.login(this.email,this.password);
    }

  // logout(){
  //   this.authService.logout();
  // }

}
