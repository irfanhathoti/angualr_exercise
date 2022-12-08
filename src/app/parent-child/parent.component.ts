import { Component, OnInit } from '@angular/core';

// import { ProductService } from '../services/product.service';

// import{Parent} from "./child.component"

import { Product } from './parent';



@Component({

  selector: 'app-parent',

  templateUrl: './parent.component.html',

  styleUrls: ['./parent.component.css']

})

export class ParentComponent {



  products : Product[];

  productId! : string;

 



  constructor() {

    this.products = [

      new Product("S01","Mr A ", "Chennai"),

      new Product("S02","Mr B ","Bangalore"),

      new Product("S03","Mr C","Hyderabad"),

      new Product("S04","Mr D","Hyderabad")

  ];

   

   }



   onproductIdSelected(product:Product):void{

    this.productId = product.productId;

    console.log(this.productId);

}


}
