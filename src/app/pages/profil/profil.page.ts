import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/model/User';
import { AuthenticationService } from 'src/app/services/autentification/authentication.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  user: User;

  constructor(private appComponent: AppComponent,
        private authService: AuthenticationService) { }

  ngOnInit() {
    if (!this.authService.isAuthanticated) {
      this.user = null;
    }
    this.user = this.authService.curentUser;
  }

  ionViewWillEnter() {
    this.appComponent.isCartVisible = false;
  }

  getEmail(){
    return this.authService.curentUser.email;
  }
  getUsername(){
    return this.authService.curentUser.username;
  }
  getName(){
    return this.authService.curentUser.name;
  }
  getLastName(){
    return this.authService.curentUser.lastName;
  }

}
