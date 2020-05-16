import { ProductService } from './product/product.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class KorpaService {
  // proizvodi povuceni sa firebase
  // data: Product[];
  // data$;


  dataHttp$;
  dataHttpString: string;
  dataHttp;
  data2: Product[];
  

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
  productName: string;

 

  constructor(private productService: ProductService) {
    // this.data$ = this.productService.getAll();
    // console.log(this.data$);
    // this.data$.subscribe(list => {
    //   this.data = list;
    //   console.log(this.data);
    // });
    
    // this.dataHttp$ = this.productService.getAllHTTP();
    // this.dataHttp$.subscribe(list => {
    //   this.dataHttpString = JSON.stringify(list);
    //   this.dataHttp = JSON.parse(this.dataHttpString);
    //   this.data2 = JSON.parse(this.dataHttpString);

    //   //puni se niz proizvoda
    //   for(let i = 0; i<this.dataHttp.length; i++) {
    //     this.data2[i].name = this.dataHttp[i].name;
    //     this.data2[i].price = this.dataHttp[i].price;
    //     this.data2[i].amount = this.dataHttp[i].amount;
    //     this.data2[i].imgUrl = this.dataHttp[i].imgUrl;
    //     this.data2[i].desc = this.dataHttp[i].desc;
        

    //   }
    //   console.log(this.data2);
    // });
    this.getProducts();
    

    
   }

  //vraca ime selektovanog proizvoda sa stranice Proizvodi
  getProductName() {
    return this.productName;
  }

  getProducts() {
   // return this.data;
    


    this.dataHttp$ = this.productService.getAllHTTP();
    this.dataHttp$.subscribe(list => {
      this.dataHttpString = JSON.stringify(list);
      this.dataHttp = JSON.parse(this.dataHttpString);
      this.data2 = JSON.parse(this.dataHttpString);

      //puni se niz proizvoda
      for(let i = 0; i<this.dataHttp.length; i++) {
        this.data2[i].name = this.dataHttp[i].name;
        this.data2[i].price = this.dataHttp[i].price;
        this.data2[i].amount = this.dataHttp[i].amount;
        this.data2[i].imgUrl = this.dataHttp[i].imgUrl;
        this.data2[i].desc = this.dataHttp[i].desc;
        

      }
      console.log(this.data2);
    }); 

    return this.data2;


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
