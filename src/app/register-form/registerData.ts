export class registerData{
    name:string
    email:string
    contact:string
    password:string
    cpassword:string
    


    constructor(name:string = "",email:string = "",contact:string = '' ,password:string = "",cpassword:string = ""){
        this.name = name
        this.email = email
        this.contact = contact
        this.password = password
        this.cpassword = cpassword
    }
}