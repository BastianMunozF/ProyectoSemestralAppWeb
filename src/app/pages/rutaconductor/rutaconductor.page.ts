import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-rutaconductor',
  templateUrl: './rutaconductor.page.html',
  styleUrls: ['./rutaconductor.page.scss'],
})
export class RutaconductorPage {
  usuarioR: string = "";
  claveR: string = "";
  variableStorage: any = "";

  arregloViajes: any;

  constructor(private router: Router, private alertController: AlertController, private database: DbserviceService) { }

  async obtenerViajes(){
    this.database.fetchViaje().subscribe(res => {
      this.arregloViajes = res;

      console.log('Viajes creados:', this.arregloViajes)
    })
  }

  ionViewWillEnter(){
    this.obtenerViajes();
  }

  aceptarViaje(){
    let id_vehiculo = localStorage.getItem('id_vehiculo');
    let id_conductor = localStorage.getItem('id');

    this.database.insertarViajeAceptado(this.arregloViajes.id_usuario, this.arregloViajes.id_viaje, id_vehiculo, id_conductor).then(res => {
      if(res){
        this.presentarAlerta("Viaje confirmado", "El viaje ha sido comenzado con éxito.");
      } else {
        this.presentarAlerta("Viaje rechazado", "Ha ocurrido un error al comenzar el viaje.")
      }
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
