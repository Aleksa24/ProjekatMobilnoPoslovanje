import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/User';
import {UserService} from '../../services/user/user.service';
import {AuthenticationService} from '../../services/autentification/authentication.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-profil-izmeni',
  templateUrl: './profil-izmeni.page.html',
  styleUrls: ['./profil-izmeni.page.scss'],
})
export class ProfilIzmeniPage implements OnInit {
  logedInUser: User;
  formGroup: FormGroup;

  constructor( private formBuilder: FormBuilder,
               private authService: AuthenticationService,
               private userService: UserService) {

  }

  // public uid: string;
  // public email: string;
  // public isAdmin: boolean = false;
  // public picture: string = 'https://ih1.redbubble.net/image.1046392278.3346/flat,750x,075,f-pad,750x1000,f8f8f8.jpg';//default slika
  // public username: string;
  // public name: string;
  // public lastName: string;
  ngOnInit() {
    this.logedInUser = this.authService.getCurentUser();

    this.formGroup = this.formBuilder.group({
      username :[this.logedInUser.getusername , Validators.required],
      name :[this.logedInUser.getname , Validators.required],
      lastName :[this.logedInUser.getlastName , Validators.required],
      picture :[this.logedInUser.getpicture , null]
    })
  }

  updateUser(){
    let user = new User(
        this.logedInUser.getid,
        this.logedInUser.getemail,
        this.logedInUser.getisAdmin,
        this.logedInUser.getpicture,
        this.formGroup.get('username').value,
        this.formGroup.get('name').value,
        this.formGroup.get('lastName').value);
    this.authService.updateUser(user);

  }


}
