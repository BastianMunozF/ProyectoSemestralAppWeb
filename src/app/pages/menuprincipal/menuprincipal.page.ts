import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { ApiService } from 'src/app/services/api.service';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { AlertController } from '@ionic/angular';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.page.html',
  styleUrls: ['./menuprincipal.page.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 })),
      ]),
    ]),
  ],
})

export class MenuprincipalPage implements OnInit {

  dateTime: string = "";
  clima: any;
  arregloViajes: any;
  id_usuario = localStorage.getItem('id');

  constructor(private apiservice: ApiService, private database: DbserviceService, private alertController: AlertController) { }

  ngOnInit(){
    
  }

  ionViewWillEnter(){
    this.obtenerClima();
    this.verificarViajeUser();
  }

  async obtenerClima(){

    this.dateTime = new Date().toISOString();

    const coordenadas = await Geolocation.getCurrentPosition();

    this.apiservice.getClima(this.dateTime, coordenadas.coords.latitude, coordenadas.coords.longitude).subscribe(res => {
      this.clima = res;

      console.log('Datos del clima:', this.clima)

    })
  }

  async verificarViajeUser(){
    let estado = 'Disponible.';
    this.database.buscarViaje(estado).then((data) => {
      this.arregloViajes = data;

      this.database.verificarViaje(this.arregloViajes.id_viaje).then(verificar => {
        if(verificar){
          console.log('Viaje aún disponible.');
        } else {
          this.presentarAlerta("Viaje rechazado", "Su viaje ha sido rechazado por el conductor.");
        }
      })

    }).catch(e => {
      console.log('Error al buscar viajes: ', + e)
    });
  }

  async presentarAlerta(titulo: string, mensaje: string){
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar']
    });

    await alert.present();
  }

}