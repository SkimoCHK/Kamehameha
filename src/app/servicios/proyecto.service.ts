import { Injectable } from '@angular/core';
import { Certificacion } from '../models/Certificacion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Telefono } from '../models/Telefono';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url = 'Certificado'
  url2 = "Mensaje"
  constructor(private http: HttpClient) { }

  public GetCertificados(): Observable<Certificacion[]> {
    return this.http.get<Certificacion[]>(`${environment.apiUrl}/${this.url}`);
  }
  
  public postMensaje(telefono: Telefono): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${this.url2}`, telefono);
  } 


}
