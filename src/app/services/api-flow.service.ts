import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiFlowService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  // URL Api Flow
  private url = 'https://www.flow.cl/api';
  private secretKey = '2b29f9a892dbfb86067cdda2123753e1d2b3db74';

  constructor(private http: HttpClient) { }

  // Función para firmar los parámetros
  private firmarParametros(params: any): string {
    const paramsOrdenados = Object.keys(params).sort().map(key => key + params[key]).join('');
    const firma = CryptoJS.HmacSHA256(paramsOrdenados, this.secretKey).toString(CryptoJS.enc.Hex);
    return firma;
  }

  // Orden de pago
  crearOrdenPago(params: any): Observable<any> {
    const firma = this.firmarParametros(params);
    params['s'] = firma;

    const body = new HttpParams({ fromObject: params });

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<any>(`${this.url}/payment/create`, body.toString(), { headers })
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  // Obtener estado de pago
  obtenerPago(params: any): Observable<any> {
    const firma = this.firmarParametros(params);
    params['s'] = firma;

    let httpParams = new HttpParams();
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.append(key, params[key]);
      }
    }

    return this.http.get<any>(`${this.url}/payment/getStatus`, { params: httpParams })
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  // Manejo de errores
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}