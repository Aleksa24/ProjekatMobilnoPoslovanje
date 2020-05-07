import { ProductService } from './../services/product/product.service';


export class Product {
   // public uid: string;
    public name: string;
    public price: number;
    public amount: number;
    public imgUrl: string;
    public desc: string;



    constructor(//uid: string, 
                name: string, 
                price: number, 
                amount: number, 
                imageUrl: string, 
                desc: string
                ) {
                   // this.uid = uid;
                    this.name = name;
                    this.price = price;
                    this.amount = amount;
                    if(this.imgUrl == null) {
                        this.imgUrl = "https://www.amerikickkansas.com/wp-content/uploads/2017/04/default-image.jpg";
                    }
                    this.desc = desc;

    }

    // get getUid() {
    //     return this.uid;
    // }

    get getName() {
        return this.name;
    }

    get getPrice() {
        return this.price;
    }

    get getAmount() {
        return this.amount;
    }

    get getImageUrl() {
        return this.imageUrl;
    }

    get getDesc() {
        return this.desc;
    }

    set setName(name) {
        this.name = name;
    } 

    set setPrice(price) {
        this.price = price;
    }

    set setAmount(amount) {
        this.amount = amount;
    }

    set setImageUrl(imageUrl) {
        this.imageUrl = imageUrl;
    }

    set setDesc(desc) {
        this.desc = desc;
    }



}

