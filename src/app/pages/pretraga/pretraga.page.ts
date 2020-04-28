import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-pretraga',
  templateUrl: './pretraga.page.html',
  styleUrls: ['./pretraga.page.scss'],
})
export class PretragaPage implements OnInit {

  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.appComponent.isCartVisible = true;
  }

}
