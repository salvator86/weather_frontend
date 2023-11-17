import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SearchBarComponent} from "./features/components/search-bar/search-bar.component";
import {HttpClientModule} from "@angular/common/http";
import {WeatherComponent} from "./features/components/weather/weather.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    BrowserAnimationsModule,
    SearchBarComponent,
    HttpClientModule,
    WeatherComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
