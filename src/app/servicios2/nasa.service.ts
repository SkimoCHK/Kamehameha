import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiKey = 'S6tA5eSIr6RXfMQ9NZEZbRBLBckSpyt1R0AjQzDA'
  private apiUrl = 'https://api.nasa.gov/planetary/apod';
  constructor(private http: HttpClient) { }

  getAstronomyPictureOfTheDay(): Observable<any> {
    const url = `${this.apiUrl}?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}



