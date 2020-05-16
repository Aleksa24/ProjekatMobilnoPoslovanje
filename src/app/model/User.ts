export class User{
    private readonly id: number;
    public email: string;
    public isAdmin: boolean = false;
    public picture: string = 'https://ih1.redbubble.net/image.1046392278.3346/flat,750x,075,f-pad,750x1000,f8f8f8.jpg';//default slika
    private username: string;
    private name: string;
    private lastName: string;
    private password: string;


    constructor(id: number, email: string, isAdmin: boolean, picture: string,username: string,name: string,lastName: string){
        this.id = id;
        this.email = email;
        this.isAdmin = isAdmin;
        this.picture = picture;
        this.name = name;
        this.username = username;
        this.lastName = lastName;
        if (picture == null) {
            this.picture = 'https://ih1.redbubble.net/image.1046392278.3346/flat,750x,075,f-pad,750x1000,f8f8f8.jpg';
        }
    }
    get getid():number{
        return this.id;
    }

    get getisAdmin(): boolean{
        return this.isAdmin;
    }
    get getemail(){
        return this.email;
    }
    get getpicture(){
        return this.picture;
    }
    get getname(){
        return this.name;
    }
    get getlastName(){
        return this.lastName;
    }
    get getusername(){
        return this.username;
    }

    setisAdmin(isAdmin){
        this.isAdmin = isAdmin;
    }
    setemail(email){
        this.email = email;
    }
    setpicture(picture){
        this.picture = picture;
    }
    setname(name){
        this.name = name;
    }
    setlastName(lastName){
        this.lastName = lastName;
    }
    setusername(username){
        this.username = username;
    }
    setpassword(password){
        this.password = password;
    }
}
