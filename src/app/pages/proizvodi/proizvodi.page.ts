import { ProizvodPage } from './../proizvod/proizvod.page';
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

  getProductId() {
   // return this.productId;
  }

  addToCart(product) {
      this.cartService.addProduct(product);
  }

  //za vidljivost korpe
  ionViewWillEnter() {
    this.appComponent.isCartVisible = true;
  }


  //za otvaranje stranice jednog proizvoda
  async openProduct(productId) {
    let modal = await this.modalCtrl.create({
      component: ProizvodPage,
      cssClass: 'product-modal'
    });
    modal.present();
    this.cartService.productId = productId;
   // console.log(this.cartService.productId);
}

}
