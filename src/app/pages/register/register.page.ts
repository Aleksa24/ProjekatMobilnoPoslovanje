import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private email: String;
  private username: String;
  private password: String;

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  register(){
    console.log('email: ' + this.email);
    console.log('username: ' + this.username);
    console.log('password: ' + this.password);

    this.registerService.registerNewUser(this.email,this.username,this.password);
  }

}
