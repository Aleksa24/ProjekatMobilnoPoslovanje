import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/model/User';
import { AngularFireDatabase } from '@angular/fire/database';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from '../../../environments/environment';


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
              private http: HttpClient) {
    
  }



  login(email: string, password: string){
      let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.post<User>(environment.site+"/api/v1/users/login",
          {email,password},
          {headers: headers}).subscribe( (user) =>{
          this.curentUser = user;
          console.log('curentUser:');
          console.log(this.curentUser);
          this.autenticationState.next(true);
          return user;
      },
          error1 => {
              debugger;
              console.dir(error1);
              if(error1.message === "User is Is Already loged in"){
                  //odraditi nesto da se kaze useru da je acc vec ulogovan
                  console.log('odraditi nesto da se kaze useru da je acc vec ulogovan');
              }
          });

  }

  logout():void{
      let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      this.http.post<{message:string}>(environment.site+"/api/v1/users/logout",
          JSON.stringify(this.curentUser),
          {headers: headers}).subscribe(
              (data) => {
              this.autenticationState.next(false);
              this.curentUser = new User(null,null,false,null,null,null,null);
              console.log(`Message from server:${data.message}`);
      },error1 => {
              console.dir(error1);
      })

  }

  isAuthanticated(){
    return this.autenticationState.value;
  }

  getCurentUser():User{
    return this.curentUser;
  }

  register(userToRegister: User) {
      let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.post<User>(environment.site+"/api/v1/users/register",
          JSON.stringify(userToRegister),
          {headers: headers});
  }

    updateUser(userToUpdate: User){
        let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

        console.log(userToUpdate);
        return this.http.put<User>(environment.site+"/api/v1/users/update",
            JSON.stringify(userToUpdate),
            {headers: headers}).subscribe(
                (updatedUser) =>
        {
            console.log("updatedUser:");
            console.log(updatedUser);
            this.curentUser = updatedUser;
            console.log("curentUser");
            console.log(this.curentUser);
        },
            (error) =>{
                    console.dir(error);
            });
    }

}
