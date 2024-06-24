import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import * as crypto from 'crypto-js';
import { Observable, catchError, retry, firstValueFrom } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiFlowService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
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
  
    this.presentarAlerta("Params firmados", "Params " + JSON.stringify(params));
  
    // Crear HttpParams
    let body = new HttpParams();
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        body = body.set(key, params[key]);
      }
    }
  
    this.presentarAlerta("Body", "Body " + body.toString());
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    // Mostrar encabezados de forma legible
    headers.keys().forEach(key => {
      this.presentarAlerta("Headers", `${key}: ${headers.get(key)}`);
    });
  
    return this.http.post<any>(`${this.url}/payment/create`, body.toString(), { headers })
      .pipe(
        retry(3),
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
    return this.http.get<any>(`${this.url}/payment/getStatus`, { params: httpParams })
      .pipe(
        retry(3),
        catchError(error => {
          console.error('Error en obtenerPago:', error);
          throw error;
        })
      );
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
