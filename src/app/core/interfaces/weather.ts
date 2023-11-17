export interface WeatherResponse {
  weatherData: Weather;
}

export interface Weather {
  city: string;
  temperature: number;
  localTime: string;
  WeatherText: string;
}
