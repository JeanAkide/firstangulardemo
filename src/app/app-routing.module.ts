import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import compoenent
import { EmployeeInfoComponent } from  './employee-info/employee-info.component';

const routes: Routes = [
  {
    path: 'employee-info',
    component: EmployeeInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



