import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.appComponent.isCartVisible = false;
  }

}
