import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  registerNewUser(email,username,password){
    console.log('poslato serveru poziv za regustraciju, server mora da se implementira');
  }
}
