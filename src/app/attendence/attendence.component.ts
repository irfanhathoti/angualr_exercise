import { Component, OnInit } from '@angular/core';
import { attendenceList } from './attendenceList';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit {
  attendence:attendenceList[]
  selectStatus:string = "Approvel"
  status:string[]
  

  constructor(){
    this.status = ["Approvel","Refuse"]
    this.attendence = [
      new attendenceList(1,2341, "Irfan", "Hathoti","present","absent", "28/05/2021",12,3,"Approvel"),
      new attendenceList(2,2342, "Imran", "Hathoti","present","absent", "29/05/2021",10,5,"Approvel"),
      new attendenceList(3,2343, "Anand", "Kumar","present","absent", "30/05/2021",11,4,"Approvel"),
      new attendenceList(4,2344, "Darshan", "S","present","absent", "31/05/2021",12,3,"Approvel"),
      new attendenceList(5,2345, "Sai", "Kiran","present","absent", "01/06/2021",8,7,"Refuse"),
      new attendenceList(6,2346, "Madhivanan", "Ramesh","present","absent", "02/06/2021",13,2,"Approvel"),
      new attendenceList(7,2347, "Rohith", "K","present","absent", "28/05/2021",5, 10,"Refuse"),
      new attendenceList(8,2348, "Irfan", "V","present","absent", "28/05/2021",7,8,"Refuse"),
      new attendenceList(9,2349, "Shatish", "M","present","absent", "28/05/2021",15, 0, "Approvel"),
      new attendenceList(10,2350, "Kare", "Gaudru","present","absent", "28/05/2021",10,5,"Approvel"),
      new attendenceList(11,2351, "Divakar", "Reddy","present","absent", "28/05/2021",6,9,"Refuse"),
      new attendenceList(12,2352, "Chandan", "S","present","absent", "28/05/2021",14,1,"Approvel"),
      new attendenceList(13,2353, "Akshatha", "Gudisagar","present","absent", "28/05/2021",5,10,"Refuse"),
      new attendenceList(14,2354, "Manisha", "Veeramani","present","absent", "28/05/2021",14,1,"Approvel"),
      new attendenceList(15,2356, "Syed", "Jeelan","present","absent", "28/05/2021",12,3,"Approvel"),
    
    ]

  }

  ngOnInit(): void {
  }

}
