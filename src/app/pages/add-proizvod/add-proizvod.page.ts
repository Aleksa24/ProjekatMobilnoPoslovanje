import { ProductService } from './../../services/product/product.service';
import { AppComponent } from 'src/app/app.component';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-proizvod',
  templateUrl: './add-proizvod.page.html',
  styleUrls: ['./add-proizvod.page.scss'],
})
export class AddProizvodPage implements OnInit {
  private todo: FormGroup;
  private naziv: string;
  private cena: number;
  private opis: string;
  
   constructor(private appComponent:AppComponent, private productService: ProductService) {
    // this.todo = this.formBuilder.group({
    //   title:['', Validators.required],
    //   description:[''],
    // });
   }
   logForm() {
     console.log(this.todo.value);
   }

  ngOnInit() {
  }


  ionViewWillEnter() {
    this.appComponent.isCartVisible = false;
  }
// za cuvanje napravljenog proizvoda
  save(product) {
    console.log(product);
    this.productService.create(product);
  }

}
