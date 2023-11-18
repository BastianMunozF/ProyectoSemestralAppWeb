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

  constructor(private database: DbserviceService, private alertController: AlertController) { }

  async obtenerHistorial(){
    const id_conductor = localStorage.getItem('id');

    this.database.buscarDetalleUsuario(id_conductor).then(detalle => {
      if(detalle){

        //Guardamos id's de los detalles del viaje
        this.detallesViaje = detalle;

        this.database.buscarDatosUsuario(this.detallesViaje.id_usuario).then(usuario => {
          if(usuario){

            //Guardamos datos del usuario que ha pedido el viaje
            this.arregloUsuario = usuario;

            this.database.buscarViajeUser(this.detallesViaje.id_usuario).then(viaje => {
              if(viaje){

                //Guardamos los datos del viaje aceptado
                this.arregloViajes = viaje;

                this.database.buscarVehiculoUsuario(id_conductor).then(vehiculo => {
                  if(vehiculo){
                    
                    //Guardamos datos del vehiculo utilizado por el conductor
                    this.arregloVehiculo = vehiculo;

                  } else {
                    console.log('Error al buscar vehiculo.');
                  }
                })
              } else {
                console.log('Error al buscar viaje.');
              }
            })
          } else {
            console.log('Error al buscar usuario.')
          }
        })
      } else {
        this.presentarAlerta('Viajes no encontrados', 'Usted aún no ha aceptado ningún viaje.');
      }
    })
  }

  ionViewWillEnter(){
    this.obtenerHistorial();
  }

  ngOnInit() {
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
