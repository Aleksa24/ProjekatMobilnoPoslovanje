import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/User';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private db: AngularFireDatabase,
              private http: HttpClient) { }


  getByUid(uid): Observable<User>{
    let params = new HttpParams().set('uid',uid);
    return this.http.get<User>('https://mobilnoposlovanjealeksamilos.firebaseio.com/users.json', {params});//ne radi
    // return this.db.object('/users/'+uid).valueChanges();
  }

  getByEmailAndPassword(email: string, password: string): Observable<User>{
    let params = new HttpParams().set('email',email).set('password',password);
    return this.http.get<User>('https://mobilnoposlovanjealeksamilos.firebaseio.com/users.json?email=' + email);//nzm zasto nece
  }

  updateUser(user: User) {
    console.log(' TO DO UPDATE USER!!!!!');
  }
}
