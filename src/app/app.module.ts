import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {WeatherComponent} from "./componentes/weather/weather.component";
import { SanitasDestacarDirective } from './directives/sanitas-destacar.directive';
import { SanitasMultiplicarDirective } from './directives/sanitas-multiplicar.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SanitasDestacarDirective,
    SanitasMultiplicarDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
