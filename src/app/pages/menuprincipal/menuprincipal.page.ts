import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.page.html',
  styleUrls: ['./menuprincipal.page.scss'],
})

export class MenuprincipalPage {

  dateTime: string = "";
  clima: any;

  constructor(private apiservice: ApiService) { }

  async obtenerClima(){

    this.dateTime = new Date().toISOString();

    const coordenadas = await Geolocation.getCurrentPosition();

    /*
    this.apiservice.getClima(this.dateTime, coordenadas.coords.latitude, coordenadas.coords.longitude).subscribe(res => {
      this.clima = res;

      console.log('Datos del clima:', this.clima)

    })
    */ 
  }

  ionViewWillEnter(){
    this.obtenerClima();
  }

}