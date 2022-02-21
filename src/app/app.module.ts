import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { searchpipePipe } from './services and pipe/searchpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeInfoComponent,
    searchpipePipe,
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
