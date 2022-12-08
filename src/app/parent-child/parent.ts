
export class Product {
    productId: string;
    productname: string;
    branch: string;
    constructor(productId: string = "", productname = "", branch: string = "") {
        this.productId = productId; this.productname = productname; this.branch = branch
    }
}

