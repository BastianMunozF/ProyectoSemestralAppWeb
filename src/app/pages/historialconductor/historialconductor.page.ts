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
    this.database.buscarDetalleUsuario(this.id_conductor).then(detalle => {
      if (detalle) {
        this.detallesViaje = detalle;

        console.log(this.detallesViaje);
      } else {
        this.presentarAlerta('Viajes no encontrados', 'Usted aún no ha aceptado ningún viaje.');
      }
    });

    this.database.buscarDatosUsuario(this.detallesViaje.id_usuario).then(usuario => {
      if (usuario) {
        this.arregloUsuario = usuario;

        console.log(this.arregloUsuario);
      } else {
        console.log('Error al buscar usuario.');
      }
    });

    this.database.buscarViajeUser(this.detallesViaje.id_usuario).then(viaje => {
      if (viaje) {
        this.arregloViajes = viaje;

        console.log(this.arregloViajes);
      } else {
        console.log('Error al buscar viaje.');
      }
    });

    this.database.buscarVehiculoUsuario(this.id_conductor).then(vehiculo => {
      if (vehiculo) {
        this.arregloVehiculo = vehiculo;

        console.log(this.arregloVehiculo);

      } else {
        console.log('Error al buscar vehiculo.');
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
