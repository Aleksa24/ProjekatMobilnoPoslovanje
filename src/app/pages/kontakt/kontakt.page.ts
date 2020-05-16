import { Component, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

declare var google;

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.page.html',
  styleUrls: ['./kontakt.page.scss'],
})
export class KontaktPage implements OnInit {

  @ViewChild('map',{static: false}) mapElement;
  map: any;
  marker: any;

  constructor(private appComponent: AppComponent) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.appComponent.isCartVisible = true;
    this.initMap();
  }


  initMap() {
    let latLng = new google.maps.LatLng(44.772667, 20.475230);
    let mapOptions = {
      center: latLng,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.marker = new google.maps.Marker({position: latLng});
    this.marker.setMap(this.map);
   
  }

}
