import { KorpaService } from 'src/app/services/korpa.service';
import { ProductService } from './../../services/product/product.service';
import { AppComponent } from 'src/app/app.component';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-proizvod',
  templateUrl: './add-proizvod.page.html',
  styleUrls: ['./add-proizvod.page.scss'],
})
export class AddProizvodPage implements OnInit {
  registrationForm: FormGroup;

  private naziv: string;
  private cena: number;
  private opis: string;
  private products = [];
  private amount;

  //boolovi za proveru forme
  private nePostoji: Boolean; 
  private unetoIme: Boolean;
  private unetaCena: Boolean;
  private unetaSlika: Boolean;
  private unetOpis: Boolean;
  
  
   constructor(
                private appComponent:AppComponent, 
                private productService: ProductService, 
                private cartService: KorpaService,
                private toastController: ToastController) {}
  

  ngOnInit() {
    this.products = this.cartService.getProducts();
  }


  ionViewWillEnter() {
    this.appComponent.isCartVisible = false;
  }
// za cuvanje napravljenog proizvoda
  save(product) {
    //setovanje kolicine na 1
    product.amount = 1;
    console.log(product);

    //da li proizvod vec postoji
    for(let i = 0; i < this.products.length; i++) {
      this.nePostoji = true;
      if(this.products[i].name === product.name) {
        console.log(product.name); 
        this.nePostoji = false;
        break;
      }
    }
    //da li je unet naziv
    this.unetoIme = false;
    if(!this.isEmpty(product.name)) {
      this.unetoIme = true;
    }
    //da li je uneta cena
    this.unetaCena = false;
    if(!this.isEmpty(product.price)) {
      this.unetaCena = true;
    }
    //da li je unet URL slike
    this.unetaSlika = false;
    if(!this.isEmpty(product.imgUrl)) {
      this.unetaSlika = true;
    }
    //da li je unet opis
    this.unetOpis = false;
    if(!this.isEmpty(product.desc)) {
      this.unetOpis = true;
    }
    //this.nePostoji = true;
    if(this.nePostoji && this.unetoIme && this.unetaCena && this.unetaSlika && this.unetOpis) {
      //ako je svaki uslov ispunjen pozovi funkciju koja stavlja proizvod u bazu
      this.productService.create(product);
    }
    else if(!this.nePostoji) {
      this.presentToast("Proizvod sa tim nazivom vec postoji");
    } else if(!this.unetoIme){
      this.presentToast("Nije unet naziv");
    } else if(!this.unetaCena) {
      this.presentToast("Nije uneta cena");
    } else if(!this.unetaSlika) {
      this.presentToast("Nije unet URL slike");
    } else if(!this.unetOpis) {
      this.presentToast("Nije unet opis");
    }
  }

  //toast poruka za obavestenje o neponjunenim poljima i da li proizvod sa tim imenom vec postoji u bazi
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  //proverava da li je polje prazno
  isEmpty(str: string) {
    return (!str || 0 === str.length);
  }

}
