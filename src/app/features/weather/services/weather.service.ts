// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url: string = environment.API_URL + '/weather/';

  constructor(private http: HttpClient) {}

  fetchData(city: string): Observable<any> {
    return this.http.get<any>(`${this.url}${city}`);
  }
  
}