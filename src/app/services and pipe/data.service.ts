import { Injectable } from '@angular/core';

import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {

info1:string[]=['Jean Akide','2000','ja@ec.com']

info2:string[]=['Emily Fields','2001','ef@ec.com']

info3:string[]=['Michelle Wambui','2002','mw@ec.com']

employeesData: Employee[] = [
  {name: "Jean Akide", year: "2000", email:'ja@ec.com'},
  {name: "Emily Fields", year: "2001", email:'ef@ec.com'},
  {name: "Michelle Wambui", year: "2002", email:'mw@ec.com'}

]


public getEmployees(): Employee[]{
  return this.employeesData;
}


getInfo1():string[]{
  return this.info1
}

getInfo2():string[]{
  return this.info2
}

getInfo3():string[]{
  return this.info3
}

  constructor() { }
}