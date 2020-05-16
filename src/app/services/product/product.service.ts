import { Product } from './../../model/Product';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireList } from '@angular/fire/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
              private db: AngularFireDatabase,
              private http: HttpClient
              ) { }

  create(product) {
    return this.db.list('/products').push(product);

  }

  //uzimanje proizvoda sa Firebase
  // getAll() {
  //   return this.db.list('/products').valueChanges();   
  // }
  //uzimanje proizvoda sa http req sa naseg servera
  getAll() {
      let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.get<Product>("http://localhost:8080/api/v1/product");
  }

}
