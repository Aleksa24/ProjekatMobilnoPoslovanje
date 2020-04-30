import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/autentification/authentication.service';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private email: string;
  private password: string;

  constructor(private authService: AuthenticationService,
               private appComponent:AppComponent,
               public afAuth: AngularFireAuth) {  
  }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.appComponent.isCartVisible = false;
  }

  async login(){
    console.log('email: ' + this.email);
    console.log('password: ' + this.password);
    this.authService.login(this.email,this.password);
    
    //
    const {email,password} = this
    try {
      const res = this.afAuth.signInWithEmailAndPassword(this.email, this.password);
    } catch (err) {
      console.dir(err);
      if(err === 'auth/user-not-found'){
        console.log('user not found');
      }
    }
  }
  logout(){
    this.authService.logout();
  }

}
