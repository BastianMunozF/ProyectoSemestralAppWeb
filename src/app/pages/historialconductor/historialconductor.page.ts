import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-historialconductor',
  templateUrl: './historialconductor.page.html',
  styleUrls: ['./historialconductor.page.scss'],
})
export class HistorialconductorPage implements OnInit {

  arregloViajes: any;
  arregloUsuario: any;
  arregloVehiculo: any;
  detallesViaje: any;

  id_conductor = localStorage.getItem('id');

  constructor(private database: DbserviceService, private alertController: AlertController) { }

  ngOnInit() {

    this.database.buscarDetalleUsuario(this.id_conductor).then(detalle => {
      if (detalle) {
        this.detallesViaje = detalle;

        console.log(this.detallesViaje);
  
        this.database.buscarDatosUsuario(this.detallesViaje.id_usuario).then(usuario => {
          if (usuario) {
            this.arregloUsuario = usuario;

            console.log(this.arregloUsuario);
  
            this.database.buscarViajeUser(this.detallesViaje.id_usuario).then(viaje => {
              if (viaje) {
                this.arregloViajes = viaje;

                console.log(this.arregloViajes);

                this.database.buscarVehiculoUsuario(this.id_conductor).then(vehiculo => {
                  if (vehiculo) {
                    this.arregloVehiculo = vehiculo;

                    console.log(this.arregloVehiculo);

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
