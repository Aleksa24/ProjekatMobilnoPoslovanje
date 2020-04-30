import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register/register.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private email: string;
  private password: string;
  private rpassword: string;

  constructor(private registerService: RegisterService,
     private appComponent: AppComponent,
     public afAuth: AngularFireAuth,
     private router: Router) { }

  ngOnInit() {
  }

  register(){
    // console.log('email: ' + this.email);
    // console.log('password: ' + this.password);
    // console.log('rpassword: ' + this.rpassword);
    // this.registerService.registerNewUser(this.email,this.password,this.rpassword);

    //ovo je novo, radi dobro
    if( this.password !== this.rpassword){
      return console.error('passwords dont match')
    }
    try {
      const res = this.afAuth.createUserWithEmailAndPassword(this.email,this.password);
      console.log(res);
      this.router.navigate(['/login']);
    } catch (err) {
      console.dir(err);
    }
    
  }
  //za sakrivanje korpe
  ionViewWillEnter() {
    this.appComponent.isCartVisible = false;
  }

}
