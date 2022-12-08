import { Component, Input, OnInit } from '@angular/core';

import { Category } from './child';



@Component({

  selector: 'app-child',

  templateUrl: './child.component.html',

  styleUrls: ['./child.component.css']

})

export class ChildComponent  {



  //array

customerChild : Category[];



@Input ()

productId! : string;



  constructor() {

this.customerChild = [

  new Category("OR002", new Date("10/07/2018"),"S02"),

  new Category("OR003", new Date("10/07/2018"),"S03"),

  new Category("OR004", new Date("10/07/2018"),"S04"),

  new Category("OR005", new Date("10/07/2018"),"S01"),

  new Category("OR006", new Date("10/07/2018"),"S02"),

  new Category("OR007", new Date("11/07/2018"),"S02"),

  new Category("OR008", new Date("11/07/2018"),"S02"),

  new Category("OR009", new Date("11/07/2018"),"S03"),

  new Category("OR000", new Date("11/07/2018"),"S03"),

  new Category("OR010", new Date("11/07/2018"),"S01"),

  new Category("OR011", new Date("11/07/2018"),"S02"),

  new Category("OR012", new Date("12/07/2018"),"S02"),

  new Category ("OR013", new Date("12/07/2018"),"S03"),

  new Category("OR014", new Date("12/07/2018"),"S04"),

  new Category("OR015", new Date("12/07/2018"),"S01"),

];
  }
}