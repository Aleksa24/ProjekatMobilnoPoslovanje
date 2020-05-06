import { AngularFireModule } from '@angular/fire';
import { ProductService } from './product/product.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../model/Product';


// export interface Product {
//   id: string;
//   name: string;
//   price: number;
//   amount: number;

//   imageUrl: string;
//   desc: string;
// }
@Injectable({
  providedIn: 'root'
})
export class KorpaService {
  // privemeno su hardcodovani proizvodi, inace su u bazi
  // data: Product[] = [
  //   {id: 0, name: 'Hirurska maska za lice', price: 200, amount: 1, imageUrl: 'assets/images/hirurskaMaska.jpg', desc:'Hirurska maska koja stiti druge od Vase Korone.'},
  //   {id: 1, name: 'Maska za lice sa filterom', price: 400, amount: 1, imageUrl: 'assets/images/maskaSaFilterom.jpg', desc:'Maska sa filterom koja Vas stiti od cestica Korone iz vazduha.'},
  //   {id: 2, name: 'Klinicki respirator', price: 15000, amount: 1, imageUrl: 'assets/images/raspirator.jpg', desc:'Klinicki respirator za kad ste toliko bolesni da cete da riknete od Korone.'}
  // ];
  data: Product[];
  dataRaw: [];

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
  //productId: number;
  productName: string;

  data$;

  constructor(private productService: ProductService) {
    this.data$ = this.productService.getAll();
    console.log(this.data$);
    this.data$.subscribe(data => {
              this.dataRaw.push(data);
              });
    
    
   }



  //vraca id selektovanog proizvoda sa stranice Proizvodi
  // getProductId() {
  //   return this.productId;
  // }
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
  //ima bag da kad se doda vise proizvoda istog tipa i kad se svi odjednom sklone ne sklone se lepo, vidi se kad
  //se taj isti proizvod opet doda
  removeProduct(product) {
      for (let [index, p] of this.cart.entries()) {
        if (p.id === product.id) {
          this.cartItemCount.next(this.cartItemCount.value - p.amount);
          this.cart.splice(index, 1);
        }
      }
  }

}
