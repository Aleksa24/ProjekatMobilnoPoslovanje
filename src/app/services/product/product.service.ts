import { Product } from './../../model/Product';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireList } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list('/products').push(product);
  }

  //uzimanje proizvoda sa Firebase
  getAll(): AngularFireList<Product[]> {
    return this.db.list('/products');   
  }
}
