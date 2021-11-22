import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { Component } from '@angular/core';  Este no va, se ve que se escapo en un copy-paste
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { CartasComponent } from 'src/app/toolbar/cartas/cartas.component';
import {MatCardModule} from '@angular/material/card';


 
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CartasComponent,

  ],
  imports: [
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    //Component, Este no va, se ve que se escapo en un copy-paste
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

