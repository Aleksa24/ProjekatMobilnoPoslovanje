export class User{
    private _email: string;
    private _isAdmin: boolean = false;

    constructor(email: string, isAdmin: boolean){
        this._email = email;
        this._isAdmin = isAdmin;
    }
    get isAdmin(): boolean{
        return this._isAdmin;
    }
    get email(){
        return this._email;
    }
}