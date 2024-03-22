import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NeowsService {

  private apiKey: string = 'S6tA5eSIr6RXfMQ9NZEZbRBLBckSpyt1R0AjQzDA';
  private apiUrl: string = 'https://api.nasa.gov/neo/rest/v1/';

  constructor(private http: HttpClient) { }

  getNearEarthObjects(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}neo/browse?api_key=${this.apiKey}`);
  }
}
