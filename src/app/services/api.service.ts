import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
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

  getClima(fechahora: any, latitud: any, longitud: any): Observable<any>{
    return this.http.get(this.apiURL + fechahora + '/t_2m:C/' + latitud + ',' + longitud + '/json?access_token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2IjoxLCJ1c2VyIjoiZHVvY3VjX211bm96X2Jhc3RpYW4iLCJpc3MiOiJsb2dpbi5tZXRlb21hdGljcy5jb20iLCJleHAiOjE3MDA0MTczOTksInN1YiI6ImFjY2VzcyJ9.szj7Xm8DCXAtqs9bw38VUcBP03wN5gjkaVmdk7fkZs6LcVULZtvMtKZvWzR3L9nzKXkHPKyc-pamPas_dEZEIA').pipe(
      retry(3)
    );
  }
}