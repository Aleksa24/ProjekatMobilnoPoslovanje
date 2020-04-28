import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/autentification/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private username: String;
  private password: String;

  constructor(private authService: AuthenticationService, private appComponent:AppComponent) { 
    
  }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.appComponent.isCartVisible = false;
  }

  login(){
    console.log('username: ' + this.username);
    console.log('password: ' + this.password);
    this.authService.login(this.username,this.password);
  }
  logout(){
    this.authService.logout();
  }

}
