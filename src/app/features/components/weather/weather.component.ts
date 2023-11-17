import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {Weather} from "../../../core/interfaces/weather";
import {WeatherService} from "../../../core/services/weather.service";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherService: WeatherService = inject(WeatherService);

  weather: Weather;

  ngOnInit(): void {
    this.weatherService.weatherInSearchedCity.subscribe((weather: Weather): void => {
      this.weather = weather;
    })
  }
}
