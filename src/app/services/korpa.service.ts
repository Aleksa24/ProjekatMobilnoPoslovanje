import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';


export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;

  imageUrl: string;
  desc: string;
}
@Injectable({
  providedIn: 'root'
})
export class KorpaService {
  // privemeno su hardcodovani proizvodi, inace su u bazi
  data: Product[] = [
    {id: 0, name: 'Hirurska maska za lice', price: 200, amount: 1, imageUrl: 'assets/images/hirurskaMaska.jpg', desc:'Hirurska maska koja stiti druge od Vase Korone.'},
    {id: 1, name: 'Maska za lice sa filterom', price: 400, amount: 1, imageUrl: 'assets/images/maskaSaFilterom.jpg', desc:'Maska sa filterom koja Vas stiti od cestica Korone iz vazduha.'},
    {id: 2, name: 'Klinicki raspirator', price: 15000, amount: 1, imageUrl: 'assets/images/raspirator.jpg', desc:'Klinicki raspirator za kad ste toliko bolesni da cete da riknete od Korone.'}
  ];

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
  productId: number;

  constructor() { }

  //vraca id selektovanog proizvoda sa stranice Proizvodi
  getProductId() {
    return this.productId;
  }

  getProducts() {
    return this.data;
  }
  getCart() {
    return this.cart;
  }
  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(product);
    }
    this.cartItemCount.next(this.getCartItemCount().value + 1);
    
  }

  decreaseProduct(product) {
      for (let [index, p] of this.cart.entries()) {
        if (p.id === product.id) {
          p.amount -= 1;
          if (p.amount === 0) {
            this.cart.splice(index, 1);
          }
        }
      }
      this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
      for (let [index, p] of this.cart.entries()) {
        if (p.id === product.id) {
          this.cartItemCount.next(this.cartItemCount.value - p.amount);
          this.cart.splice(index, p.amount);
          //bez ovoga ima bag gde kolicina ostaje nepromenjena, kad se stavi na 0 i doda se isti proizvod jednom pise 0
          //ovako radi odlicno
          p.amount = 1;
        }
      }
  }

}
