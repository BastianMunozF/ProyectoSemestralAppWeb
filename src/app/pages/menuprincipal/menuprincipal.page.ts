import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { ApiService } from 'src/app/services/api.service';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.page.html',
  styleUrls: ['./menuprincipal.page.scss'],
})

export class MenuprincipalPage implements OnInit{

  dateTime: string = "";
  clima: any;
  arregloHistorial: any;
  id_usuario = localStorage.getItem('id');

  constructor(private apiservice: ApiService, private database: DbserviceService, private alertController: AlertController) { }

  async obtenerClima(){

    this.dateTime = new Date().toISOString();

    const coordenadas = await Geolocation.getCurrentPosition();

    this.apiservice.getClima(this.dateTime, coordenadas.coords.latitude, coordenadas.coords.longitude).subscribe(res => {
      this.clima = res;

      console.log('Datos del clima:', this.clima)

    })
  }

  async verificarViajeUser(){
    this.database.verificarViaje(this.arregloHistorial.id_viaje).then(verificar => {
      if(verificar){
        this.presentarAlerta("Viaje rechazado", "Su viaje ha sido rechazado por el conductor.")
      } else {
        console.log('Viaje aún disponible.')
      }
    })
  }

  async viajeUser(){
    this.database.buscarViajeUser(this.id_usuario).then(res => {
      this.arregloHistorial = res;
    });
  }

  ngOnInit(){
    this.viajeUser();
  }

  ionViewWillEnter(){
    this.obtenerClima();
    this.verificarViajeUser();
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