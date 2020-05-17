import { ProductService } from './../services/product/product.service';


export class Product {
    public id: number;
    public name: string;
    public price: number;
    public amount: number;
    public imgUrl: string;
    public desc: string;



    constructor(//id: number,
                name: string, 
                price: number, 
                amount: number, 
                imgUrl: string, 
                desc: string
                ) {
                   // this.id = id;
                    this.name = name;
                    this.price = price;
                    this.amount = amount;
                    if(this.imgUrl === null) {
                        this.imgUrl = "https://www.amerikickkansas.com/wp-content/uploads/2017/04/default-image.jpg";
                    } else {
                        this.imgUrl = imgUrl;
                    }
                    this.desc = desc;

    }

    get getId() {
        return this.id;
    }

    get getName() {
        return this.name;
    }

    get getPrice() {
        return this.price;
    }

    get getAmount() {
        return this.amount;
    }

    get getImgUrl() {
        return this.imgUrl;
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

    set setImgUrl(imgUrl) {
        this.imgUrl = imgUrl;
    }

    set setDesc(desc) {
        this.desc = desc;
    }



}

