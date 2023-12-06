import { Pipe, PipeTransform } from '@angular/core';
import { weatherCodes } from '../services/weatherCodes';

@Pipe({ name: 'weatherByCode' })
export class WeatherByCodePipe implements PipeTransform {
  transform(code: number): string {
    const weatherCode = weatherCodes.weatherCode[code] || weatherCodes.weatherCodeFullDay[code] || weatherCodes.weatherCodeDay[code] || weatherCodes.weatherCodeNight[code];
    return weatherCode || 'Weather not found';
  }
}
