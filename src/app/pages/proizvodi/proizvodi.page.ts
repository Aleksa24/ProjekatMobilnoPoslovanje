import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import {KorpaService} from '../../services/korpa.service';


import {ModalController} from '@ionic/angular';
import {BehaviorSubject} from 'rxjs';


@Component({
  selector: 'app-proizvodi',
  templateUrl: './proizvodi.page.html',
  styleUrls: ['./proizvodi.page.scss'],
})
export class ProizvodiPage implements OnInit {

  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;


  constructor(
              private cartService: KorpaService, 
              private modalCtrl: ModalController, 
              private appComponent: AppComponent
              ) { }

  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(product) {
      this.cartService.addProduct(product);
  }

  openCart() {

  }

  ionViewWillEnter() {
    this.appComponent.isCartVisible = true;
  }

}
