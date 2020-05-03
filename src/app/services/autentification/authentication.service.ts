import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
//import { userInfo } from 'os';
import { User } from 'src/app/model/User';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { UserService } from '../user/user.service';

const TOKEN_KEY = 'auth-token';//kljic za mapu u storage

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  autenticationState = new BehaviorSubject(false);
  public curentUser: User = new User(null,null,false,null,null,null,null);//mora da se da null vrednost na pocetku da bi funkcije neke citale iz njega 
  user$: Observable<User>;

  constructor(private storage: Storage,
     private plt: Platform,
    public afAuth: AngularFireAuth,
     private db: AngularFireDatabase,
     private userService: UserService) {
    
  }

  login(email: string, password: string){
    try {
      this.afAuth.signInWithEmailAndPassword(email, password).then(userInfo => {
        this.user$ = this.userService.get(userInfo.user.uid);
        console.log(this.user$);

        this.user$.subscribe(x => {
          this.curentUser = x
          console.log(x);//ovde se vide podaci koji treba da se upisu u curentUser, ali ne znam kako
        });
        console.log('CURENT USER: ' + this.curentUser);//ovdde sam stao, nzm kako da citam podatke koje primim a siguran sam da primim dobre podatke
        
        this.autenticationState.next(true);
          
         
        // if (userInfo.user.email === 'pera@gmail.com') {//ovako postavljam admina, nzm drugacije za sada, na firebase se automatski kreira neki user
        //   this.curentUser = new User(userInfo.user.uid,userInfo.user.email,true,null,null,null,null);
        //   this.autenticationState.next(true);
        //   console.log('logovan je pera pa je i admin'); 
        // }else{
        //   this.curentUser = new User(userInfo.user.uid,userInfo.user.email,false,null,null,null,null);
        //   this.autenticationState.next(true);
        // }

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
