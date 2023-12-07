import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { AlertController } from '@ionic/angular';
import { Detalle } from 'src/app/services/detalle';
import { Usuario } from 'src/app/services/usuario';
import { Vehiculo } from 'src/app/services/vehiculo';
import { Viaje } from 'src/app/services/viaje';

@Component({
  selector: 'app-historialconductor',
  templateUrl: './historialconductor.page.html',
  styleUrls: ['./historialconductor.page.scss'],
})
export class HistorialconductorPage implements OnInit {

  arregloViajes: Viaje[] = [];
  arregloUsuario: Usuario[] = [];
  arregloVehiculo: Vehiculo[] = [];
  detallesViaje: Detalle[] = [];

  id_conductor = localStorage.getItem('id');

  constructor(private database: DbserviceService, private alertController: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
  
  }

  comenzarViaje(id_viaje: any){

    let estado = 'Viaje Iniciado.';
    this.database.actualizarViaje(estado, id_viaje).then(viajeActualizado => {
      if(viajeActualizado){

        this.presentarAlerta("Viaje iniciado", "Su viaje ha sido iniciado con éxito.");

      } else {

        this.presentarAlerta("Error al comenzar viaje", "Su viaje no ha podido ser iniciado.");

      }
    })
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
