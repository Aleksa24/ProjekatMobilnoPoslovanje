import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.page.html',
  styleUrls: ['./kontakt.page.scss'],
})
export class KontaktPage implements OnInit {

  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.appComponent.isCartVisible = true;
  }

}
