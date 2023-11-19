import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-rutaconductor',
  templateUrl: './rutaconductor.page.html',
  styleUrls: ['./rutaconductor.page.scss'],
})

export class RutaconductorPage implements OnInit {

  arregloViajes: any;

  constructor(private alertController: AlertController, private database: DbserviceService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.buscarViajes();
  }

  async buscarViajes(){
    this.database.buscarViaje().then((data) => {
      this.arregloViajes = data;
    }).catch(e => {
      console.log('Error al buscar viajes: ', + e)
    });
  }

  aceptarViaje(){
    let id_vehiculo = localStorage.getItem('id_vehiculo');
    let id_conductor = localStorage.getItem('id');

    this.database.insertarViajeAceptado(this.arregloViajes.id_usuario, this.arregloViajes.id_viaje, id_vehiculo, id_conductor).then(res => {
      if(res !== null){
        console.log('Viaje aceptado con éxito.')
        this.presentarAlerta("Viaje aceptado", "El viaje ha sido aceptado con éxito.")

        let estado = 'Aceptado.';
        this.database.actualizarEstadoViaje(estado, this.arregloViajes.id_usuario).then(estado => {
          if(estado) {
            console.log('Viaje actualizado.')
            this.presentarAlerta("Viaje confirmado", "El viaje ha sido comenzado con éxito.");
          } else {
            console.log('El viaje no se ha actualizado.')
          }
        });
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