import { Pipe, PipeTransform } from '@angular/core';

interface WeatherIcons {
  [key: number]: string;
}

const icons: WeatherIcons = {
    1000: "sunny",
    4000: "rainy",
    4001: "rainy",
    4200: "rainy",
    1001: "cloudy"
    // ...
}

@Pipe({ name: 'weatherIcon' })
export class WeatherByIconPipe implements PipeTransform {
  
  transform(code: number): string {
    return icons[code]
  }
}
