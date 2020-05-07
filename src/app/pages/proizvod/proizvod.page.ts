import { ModalController } from '@ionic/angular';
import { ProizvodiPage } from './../proizvodi/proizvodi.page';
import { Component, OnInit } from '@angular/core';
import { KorpaService } from 'src/app/services/korpa.service';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-proizvod',
  templateUrl: './proizvod.page.html',
  styleUrls: ['./proizvod.page.scss'],
})
export class ProizvodPage implements OnInit {

  products = [];
  p: Product;
 // productId: number;
  productName: string;

  constructor(
              private cartService: KorpaService,
              private modalCtrl: ModalController
              ) { }

  ngOnInit() {
    this.products = this.cartService.getProducts();
  //  this.productId = this.cartService.getProductId();
    this.productName = this.cartService.getProductName();
    console.log(this.productName);
    this.showProduct();
   // console.log(this.p.name);
  }

  addToCart(product) {
    this.cartService.addProduct(product);
  }

  close() {
    this.modalCtrl.dismiss();
  }
  //metoda za trazenje izabranog proizvoda u listi po IDju
 
  // showProduct() {
  //   for(let i = 0; i <= this.products.length; i++) {
  //       if(this.products[i].id === this.productId) {
  //         this.p = this.products[i];
  //         //console.log(this.p.name); 
  //         break;
  //       }
  //   }
  // }

   //metoda za trazenje izabranog proizvoda u listi po imenu
  showProduct() {
    for(let i = 0; i < this.products.length; i++) {
        if(this.products[i].name === this.productName) {
          this.p = this.products[i];
          //console.log(this.p.name); 
          break;
        }
    }
  }

}
