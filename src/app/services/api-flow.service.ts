import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import * as crypto from 'crypto-js';
import { Observable, catchError, retry, firstValueFrom } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiFlowService {

  url = 'https://sandbox.flow.cl/api';
  secretKey = '2b29f9a892dbfb86067cdda2123753e1d2b3db74';

  constructor(private http: HttpClient, private alertController: AlertController) { }

  firmarParametros(params: any): string {
    const paramsOrdenados = Object.keys(params).sort().map(key => `${key}${params[key]}`).join('');
    const firma = crypto.HmacSHA256(paramsOrdenados, this.secretKey).toString();
    return firma;
  }

  async crearOrdenPago(params: any): Promise<any> {
    try {
      const firma = this.firmarParametros(params);
      params['s'] = firma;

      this.presentarAlerta("Firma en service de la api", "A " + firma)
  
      // Convertir los parámetros a una cadena codificada
      const httpParams = new URLSearchParams();

      this.presentarAlerta("HTTPARAMS", "Api service" + httpParams)
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          httpParams.set(key, params[key]);
        }
      }

      this.presentarAlerta("2da Firma", "" + params)

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*'
        })
      }
  
      const response = await firstValueFrom(
        this.http.post<any>(`${this.url}/payment/create`, httpParams.toString(), httpOptions)
          .pipe(
            retry(3),
            catchError(error => {
              console.error('Error en la solicitud crearOrdenPago:', error);
              throw error;
            })
          )
      );

      this.presentarAlerta("Response", "Response" + JSON.stringify(response))
  
      console.log('Respuesta de crearOrdenPago:', JSON.stringify(response));
  
      return response;
    } catch (error) {
      console.error('Error en la solicitud crearOrdenPago:', error);
      throw error; // Lanza el error para manejarlo en el componente que llama a esta función
    }
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
