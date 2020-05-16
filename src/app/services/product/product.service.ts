import { Product } from 'src/app/model/Product';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireList } from '@angular/fire/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
              private db: AngularFireDatabase,
              private http: HttpClient
              ) { }

  create(product: Product) {
    //return this.db.list('/products').push(product);
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    console.log(product);
    console.log(JSON.stringify(product));
    let next =  this.http.post<Product>("http://localhost:8080/api/v1/product/save", 
                                  JSON.stringify(product),
                                  {headers: headers}).subscribe(
                                    (returnedProduct) => {
                                        console.dir("product:" + returnedProduct)//sa ovim proizvodom radis sta hoces, ne moras da se subscribe ovde, mozes da vratis pre subscribe, tad ce vratiti Observable<Product>
                                        let productToWorkWith: Product = new Product(returnedProduct.id,
                                            returnedProduct.name,
                                            returnedProduct.price,
                                            returnedProduct.amount,
                                            returnedProduct.imgUrl,
                                            returnedProduct.desc);
                                        console.log("productToWorkWith:"+{productToWorkWith});
                                        console.log(returnedProduct.id);
                                        console.log(returnedProduct.name);
                                        console.log(returnedProduct.price);
                                        console.log(returnedProduct.amount);
                                        console.log(returnedProduct.imgUrl);
                                        console.log(returnedProduct.desc);
                                    },(error => {
                                        console.dir(error);
         })
                                  );
   
   return next;
  }

  //uzimanje proizvoda sa Firebase
  // getAll() {
  //   return this.db.list('/products').valueChanges();   
  // }

  //uzimanje proizvoda sa http req sa naseg servera
  getAllHTTP() {
      return this.http.get<Product[]>("http://localhost:8080/api/v1/product");
      
     
      
  }

}
