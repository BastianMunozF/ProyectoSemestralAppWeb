import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import * as crypto from 'crypto-js';
import { retry } from 'rxjs';

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

  //URL Api Flow
  url = 'https://www.flow.cl/api';

  secretKey = '2b29f9a892dbfb86067cdda2123753e1d2b3db74';

  constructor(private http: HttpClient) { }

  //Función para firmar los parámetros
  firmarParametros(params: any){

    //Ordeno de parámetros alfabéticamente
    const paramsOrdenados = Object.keys(params).sort().map(key => key + params[key]).join('');

    const firma = crypto.HmacSHA256(paramsOrdenados, this.secretKey).toString();

    return firma;

  }

  //Función para enviar el pago
  enviarPago(params: any){
    //Agregar firma a los params
    params['s'] = this.firmarParametros(params);

    //Realizar solicitud POST
    return this.http.post<any>(`${this.url}/payments/create`, params, this.httpOptions);
  }

  obtenerPago(params: any){
    params['s'] = this.firmarParametros(params);

    let httpParams = new HttpParams();

    //Codificamos los parámetros
    for(let key in params) {
      if(params.hasOwnProperty(key)){
        httpParams = httpParams.append(key, params[key]);
      }
    }

    //Realizamos solicitud GET
    return this.http.get<any>(`${this.url}/payment/getStatus`, {params: httpParams}).pipe(
      retry(3)
    );
  }
}