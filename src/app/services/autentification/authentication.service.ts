import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { userInfo } from 'os';
import { User } from 'src/app/model/User';
import { Router } from '@angular/router';

const TOKEN_KEY = 'auth-token';//kljic za mapu u storage

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  autenticationState = new BehaviorSubject(false);
  curentUser: User;

  constructor(private storage: Storage, private plt: Platform,public afAuth: AngularFireAuth) {
    
  }

  login(email: string, password: string){
    try {
      this.afAuth.signInWithEmailAndPassword(email, password).then(userInfo => {
        if (userInfo.user.email === 'pera@gmail.com') {//ovako postavljam admina, nzm drugacije za sada, na firebase se automatski kreira neki user
          this.curentUser = new User(userInfo.user.email,true);
          this.autenticationState.next(true);
          console.log('logovan je pera pa je i admin');
          
        }else{
          this.curentUser = new User(userInfo.user.email,false);
          this.autenticationState.next(true);
        }

      });
    } catch (err) {
      console.dir(err);
      if(err === 'auth/user-not-found'){
        console.log('user not found');
        //moze da se doda neko ponasanje ako korisnik ne postoji
      }
    }

  }

  logout(){
    try {
      this.afAuth.signOut;
      this.autenticationState.next(false);
      //moze da se doda navigacija kad se logout
    } catch (error) {
      console.dir(error);
    }
  }

  isAuthanticated(){
    return this.autenticationState.value;
  }

  // checkToken(){
  //   this.storage.get(TOKEN_KEY).then( res =>{
  //     if(res){
  //       this.autenticationState.next(true);
  //     }
  //   });
  // }

}
