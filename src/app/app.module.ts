import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import Spy from './utils/spy.component'
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
