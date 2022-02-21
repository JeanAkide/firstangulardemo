import { Component, OnInit } from '@angular/core';
import { DataService } from '../services and pipe/data.service';

import {Employee} from '../models/employee';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css'],
  providers: [DataService]
})
export class EmployeeInfoComponent implements OnInit {

infoReceived1:any=[];
infoReceived2:any=[];
infoReceived3:any=[];




// getInfoFromService1(){
//   this.infoReceived1=this.dservice.getInfo1()
// }
// getInfoFromService2(){
//   this.infoReceived2=this.dservice.getInfo2()
// }
// getInfoFromService3(){
//   this.infoReceived3=this.dservice.getInfo3()
// }

  constructor(private dservice: DataService) { }

  ngOnInit(): void {
    //alert(this.dservice.getInfo1())
    this.getEmployees();
  }

    

  getEmployees(): any {
    this.infoReceived1 = this.dservice.getEmployees()
  
  
    


  
}
}
