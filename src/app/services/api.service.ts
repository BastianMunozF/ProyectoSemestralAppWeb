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

  getClima(fechahora: any, latitud: any, longitud: any): Observable<any>{
    return this.http.get(this.apiURL + fechahora + '/t_2m:C/' + latitud + ',' + longitud + '/json?access_token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2IjoxLCJ1c2VyIjoiZHVvY3VjX211bm96X2Jhc3RpYW4iLCJpc3MiOiJsb2dpbi5tZXRlb21hdGljcy5jb20iLCJleHAiOjE3MDAyNjU2NjUsInN1YiI6ImFjY2VzcyJ9.7ZmANURUPb7C4U41pQPNYLvJO_J5zhmwYEOGyOubFviPdM0QoOtTjadsElMRXGjtfd8tRJ3RXaj6dE2kU6F8uw').pipe(
      retry(3)
    );
  }

}