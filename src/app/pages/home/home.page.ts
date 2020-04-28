import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.appComponent.isCartVisible = true;
  }

}
