import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';

const TOKEN_KEY = 'auth-token';//kljic za mapu u storage

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  autenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, private plt: Platform) {
    this.plt.ready().then( () =>{
      this.checkToken();
    });
   }

  login(username: String, password: String){
    //ovde treba da se salje poziv serveru da se ulogje dati User
    //posto ne znam tacno sta radi ovo ispod, a u klipu kaze da se salje poziv serveru za autentifikaciju ostacicu ovako za sada
    //cenim da je ovo 'barbarosa 123123' ustvari User koji ce da se stavi ovde

    //user = new User(username,password,email);
    //konsultovacemo se oko ovoga, za sada radi login povrsno
    this.storage.set(TOKEN_KEY,'barbarosa 123123').then( res =>{
      this.autenticationState.next(true);
    });
  }

  logout(){
    this.storage.remove(TOKEN_KEY).then( res =>{
      this.autenticationState.next(false);
    });
  }

  isAuthanticated(){
    return this.autenticationState.value;
  }

  checkToken(){
    this.storage.get(TOKEN_KEY).then( res =>{
      if(res){
        this.autenticationState.next(true);
      }
    });
  }

}
