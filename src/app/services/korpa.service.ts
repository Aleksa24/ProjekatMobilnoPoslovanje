import { ProductService } from './product/product.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class KorpaService {
  // proizvodi povuceni sa firebase
  data: Product[];
  data$;
  

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
  productName: string;

 

  constructor(private productService: ProductService) {
    this.data$ = this.productService.getAll();
    console.log(this.data$);
    this.data$.subscribe(list => {
      this.data = list;
      console.log(this.data);
    });
    
   }

  //vraca ime selektovanog proizvoda sa stranice Proizvodi
  getProductName() {
    return this.productName;
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
      if (p.name === product.name) {
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
        if (p.name === product.name) {
          p.amount -= 1;
          if (p.amount === 0) {
            this.cart.splice(index, 1);
          }
        }
      }
      this.cartItemCount.next(this.cartItemCount.value - 1);
  }
  //ima bag da kad se doda vise proizvoda istog tipa i kad se svi odjednom sklone ne sklone se lepo, vidi se kad
  //se taj isti proizvod opet doda
  removeProduct(product) {
      for (let [index, p] of this.cart.entries()) {
        if (p.name === product.name) {
          this.cartItemCount.next(this.cartItemCount.value - p.amount);
          this.cart.splice(index, 1);
        }
      }
  }

}
