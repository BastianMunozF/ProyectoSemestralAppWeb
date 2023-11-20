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
    this.database.buscarDetalleUsuario(this.id_conductor).then((detalle) => {
      if (detalle && detalle.length > 0) {
        this.detallesViaje = detalle;

        const id_usuario: any = this.detallesViaje[1].id_usuario;

        this.database.buscarDatosUsuario(id_usuario).then((usuario) => {
          if (usuario && usuario.length > 0) {
            this.arregloUsuario = usuario;

            this.database.buscarViajeUser(id_usuario).then((viaje) => {
              if (viaje && viaje.length > 0) {
                this.arregloViajes = viaje;

                this.database.buscarVehiculoUsuario(this.id_conductor).then((vehiculo) => {
                  if (vehiculo && vehiculo.length > 0) {
                    this.arregloVehiculo = vehiculo;
                  } else {
                    console.log('Error al buscar vehiculo.');
                  }
                });
              } else {
                console.log('Error al buscar viaje.');
              }
            });
          } else {
            console.log('Error al buscar usuario.');
          }
        });
      } else {
        this.presentarAlerta('Viajes no encontrados', 'Usted aún no ha aceptado ningún viaje.');
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
