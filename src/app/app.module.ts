import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserFromComponent } from './user-from/user-from.component';
import {  FormsModule, NgModel } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserFromComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
