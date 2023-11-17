import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Weather, WeatherResponse} from "../interfaces/weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherInSearchedCity: BehaviorSubject<Weather> = new BehaviorSubject({
    city: '',
    localTime: '',
    temperature: 0,
    WeatherText: '',
  });

  isShowedErrorMessage: boolean = false;
  isLoading: boolean = false;

  private http: HttpClient = inject(HttpClient);

  private API_URL: string = 'http://localhost:3000/weather';

  setWeather(responseWeather: WeatherResponse): void {
    if (responseWeather.weatherData) {
      this.weatherInSearchedCity.next(responseWeather.weatherData);
      this.isShowedErrorMessage = false;
    } else {
      this.resetWeather();
      this.isShowedErrorMessage = true;
    }
    this.isLoading = false;
  }

  getWeather(city: string): Observable<WeatherResponse> {
    this.isLoading = true;
    return this.http.get<WeatherResponse>(`${this.API_URL}/${city}`);
  }

  resetWeather(): void {
    this.weatherInSearchedCity.next({
      city: '',
      localTime: '',
      temperature: 0,
      WeatherText: '',
    })
  }

}
