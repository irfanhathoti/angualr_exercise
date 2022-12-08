export class attendenceList {
    slNo:number
    RegNo: number
    firstName: string
    lastName: string
    present: string
    absent: string
    date: string
    NoofStup: number
    Noofstua:number
    status: string
    constructor( slNo:number, RegNo: number, firstName: string = "", lastName: string = "", present: string = "", absent: string, date: string, NoofStup: number,Noofstua:number ,status: string) {
        this.slNo = slNo
        this.RegNo = RegNo
        this.firstName = firstName
        this.lastName = lastName
        this.present = present
        this.absent = absent
        this.date = date
        this.NoofStup = NoofStup
        this.Noofstua = Noofstua
        this.status = status


    }

    fullName():string{
        return this.firstName + " " + this.lastName
    }

}