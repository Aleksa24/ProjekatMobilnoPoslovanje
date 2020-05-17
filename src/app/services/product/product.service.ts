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
  p: Product;

  constructor(
              private db: AngularFireDatabase,
              private http: HttpClient
              ) { }

  create(product: Product) {
    //return this.db.list('/products').push(product);
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    console.log(product);
    console.log(JSON.stringify(product));

    this.p = new Product(product.name, product.price, product.amount, product.imgUrl, product.desc);
    console.log("Proizvod: "+this.p);

    return  this.http.post<Product>("http://localhost:8080/api/v1/product/save", 
                                  JSON.stringify(this.p),
                                  {headers: headers}).subscribe(
                                    (error) => {console.dir("error:" + error)}
                                  );
   
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
