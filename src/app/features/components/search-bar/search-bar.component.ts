import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {WeatherService} from "../../../core/services/weather.service";
import {WeatherResponse} from "../../../core/interfaces/weather";

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  weatherService: WeatherService = inject(WeatherService);

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      searchInput: new FormControl(''),
    });
  }

  searchWeather(form: FormGroup): void {
    if (form.value.searchInput.length >= 2) {
      this.weatherService.getWeather(form.value.searchInput)
        .subscribe((data: WeatherResponse): void => {
          this.weatherService.setWeather(data);
      })
    }
  }
}
