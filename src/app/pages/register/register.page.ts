import { AppComponent } from './../../app.component';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { RegisterService } from 'src/app/services/register/register.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {AuthenticationService} from '../../services/autentification/authentication.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/User';
import {error, log} from 'util';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit,OnDestroy {
  formGroup: FormGroup;
  userSubscription: Subscription;

  constructor(private authService: AuthenticationService,
      private appComponent: AppComponent,
      private router: Router,
      private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email :["" , [Validators.required,Validators.email]],
      username :["" , Validators.required],
      password :["" , Validators.required],
      repeatpassword :["" , Validators.required],
      name :["" , Validators.required],
      lastName :["" , Validators.required],
      picture :["https://ih1.redbubble.net/image.1046392278.3346/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" , null]
    })
  }

  //za sakrivanje korpe
  ionViewWillEnter() {
    this.appComponent.isCartVisible = false;
  }

  register() {
    if (this.formGroup.controls["password"].value !== this.formGroup.controls['repeatpassword'].value) {//provera
      return console.error('passwords dont match')
    }
    let userToRegister: User = new User(-1,
        this.formGroup.get('email').value,
        false,
        this.formGroup.get('picture').value,
        this.formGroup.get('username').value,
        this.formGroup.get('name').value,
        this.formGroup.get('lastName').value);
    userToRegister.setpassword(this.formGroup.get('password').value);

    console.log(userToRegister);

    this.authService.register(userToRegister).subscribe(
        (userFromServer) => {
          console.log("userFromServer:");
          console.log({userFromServer});
    },(error1) => {
      console.log("error when sendig post user request")
      console.dir(error1);
    } )
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
