import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

args:string = "";




//public searchpipe : any = '';

constructor (){
}

Employees=[{
  "name":"Jean Akide",
  "year":"2000",
  "email":"ja@ec.com"

},
{
  "name":"Emily Fields",
  "year":"2001",
  "email":"ef@ec.com"
},
{
  "name":"Michelle Wambui",
  "year":"2002",
  "email":"mw@ec.com"
}
]



title = 'Demo';
  desc="Desc"
}






// git init --initial-branch=main
// git remote add origin https://devops.ekenya.co.ke:1126/Jean/services-in-angular.git
// git add .
// git commit -m "Initial commit"
// git push -u origin main