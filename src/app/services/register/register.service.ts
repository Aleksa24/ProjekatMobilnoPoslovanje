import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private afAuth: AngularFireAuth,private router: Router,private db: AngularFireDatabase) { }

  registerNewUser(email,password,username,name,lastName){

    try {
      const res = this.afAuth.createUserWithEmailAndPassword(email,password);
      console.log(res);
      this.router.navigate(['/login']);

      //ovde sam dodao ubacivanje u bazu usera sa njegovom rolom
      res.then(userInfo => {
        this.db.object('/users/' + userInfo.user.uid).update({
          name: name,
          lastName: lastName,
          username: username,
          email: userInfo.user.email,
          picture: 'https://ih1.redbubble.net/image.1046392278.3346/flat,750x,075,f-pad,750x1000,f8f8f8.jpg',//ovo treba dodati ali za sada me mrzi
          isAdmin: false
        })
      })


    } catch (err) {
      console.dir(err);
    }

    
  }
}
