import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  //URL de API a consumir
  apiURL = 'https://api.meteomatics.com/';

  constructor(private http: HttpClient) { }

  getClima(fechahora: any, latitud: any, longitud: any): Observable<any> {
    return this.http.get(this.apiURL + fechahora + '/t_2m:C/' + latitud + ',' + longitud + '/html').pipe(
      retry(3)
    );
  }
}
