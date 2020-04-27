import { Component, OnInit } from '@angular/core';
import {KorpaService, Product} from '../../services/korpa.service';

import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.page.html',
  styleUrls: ['./korpa.page.scss'],
})
export class KorpaPage implements OnInit {

  cart: Product[] = [];

  constructor(private cartService: KorpaService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  // za checkout kasnije
  checkout() {
    console.log('to do checkout()');
  }

}
