import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import * as crypto from 'crypto-js';
import { Observable, catchError, retry } from 'rxjs';
import { AlertController } from '@ionic/angular';

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

  url = 'https://www.flow.cl/api';
  secretKey = '2b29f9a892dbfb86067cdda2123753e1d2b3db74';

  constructor(private http: HttpClient, private alertController: AlertController) { }

  firmarParametros(params: any): string {
    const paramsOrdenados = Object.keys(params).sort().map(key => `${key}${params[key]}`).join('');
    const firma = crypto.HmacSHA256(paramsOrdenados, this.secretKey).toString();
    return firma;
  }

  crearOrdenPago(params: any): Observable<any> {
    const firma = this.firmarParametros(params);
    params['s'] = firma;
    console.log(firma)
    console.log(params)
    const body = new HttpParams({ fromObject: params });
    console.log(body)
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    console.log(headers)
  
    return this.http.post<any>(`${this.url}/payment/create`, body, { headers })
      .pipe(
        catchError(error => {
          console.error('Error en la solicitud crearOrdenPago:', error);
          this.presentarAlerta('Error en función crearOrdenPago', 'Arréglalo llenaor');
          throw error; // Puedes lanzar el error nuevamente para manejarlo en el componente que llama a esta función
        })
      );
  }

  obtenerPago(params: any): Observable<any> {
    const firma = this.firmarParametros(params);
    params['s'] = firma;
    let httpParams = new HttpParams();
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.append(key, params[key]);
      }
    }
    return this.http.get<any>(`${this.url}/payment/getStatus`, { params: httpParams }).pipe(retry(3));
  }

  async presentarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar']
    });
    await alert.present();
  }
}