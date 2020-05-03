export class User{
    public uid: string;
    public email: string;
    public isAdmin: boolean = false;
    public picture: string = 'https://ih1.redbubble.net/image.1046392278.3346/flat,750x,075,f-pad,750x1000,f8f8f8.jpg';//default slika
    public username: string;
    public name: string;
    public lastName: string;


    constructor(uid: string, email: string, isAdmin: boolean, picture: string,username: string,name: string,lastName: string){
        this.uid = uid;
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

    set setisAdmin(isAdmin){
        this.isAdmin = isAdmin;
    }
    set setemail(email){
        this.email = email;
    }
    set setpicture(picture){
        this.picture = picture;
    }
    set setname(name){
        this.name = name;
    }
    set setlastName(lastName){
        this.lastName = lastName;
    }
    set setusername(username){
        this.username = username;
    }
}