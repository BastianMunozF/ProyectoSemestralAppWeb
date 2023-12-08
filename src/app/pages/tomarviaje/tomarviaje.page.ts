import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tomarviaje',
  templateUrl: './tomarviaje.page.html',
  styleUrls: ['./tomarviaje.page.scss'],
})

export class TomarviajePage implements OnInit {

  arregloViajes: any = [
    {
      id_viaje: '',
      f_viaje: '',
      hora_salida: '',
      salida: '',
      destino: '',
      cant_asientos: '',
      valor_asiento: '',
      estado: '',
      id_usuario: '',
    }
  ]

  constructor(private alertController: AlertController, private database: DbserviceService, private router: Router) { }

  ngOnInit() {

    let estado = 'Disponible.';

    this.database.buscarViaje(estado);

    this.database.fetchViaje().subscribe(datos => {

      if(datos.length > 0){

        console.log('Viajes: ', datos);
        this.arregloViajes = datos;

      } else {

        console.log('Datos no encontrados.');

      }
    })
  }

  aceptarViaje(x: any){
    console.log('Viaje: ', x);

    let id_user = localStorage.getItem('id');

    this.database.buscarViajeUserAceptado(id_user, x.id_viaje).then(viajeaceptado => {
      if(viajeaceptado.length > 0){

        this.presentarAlerta("Error al reservar viaje", "Usted ya ha aceptado este viaje.");

      } else {

        if(parseInt(x.cant_asientos) > 0){

          let asientos = parseInt(x.cant_asientos) - 1;

          this.database.insertarViajeAceptado(id_user, x.id_viaje).then(res => {

            if(res){

              this.database.actualizarEstadoViaje(asientos, x.id_viaje).then(result => {

                if(result){

                  this.presentarAlerta("Viaje Confirmado", "Su viaje ha sido reservado con éxito.");
                  const index = this.arregloViajes.indexOf(x);
                  if(index !== -1){
                    this.arregloViajes.splice(index, 1);
                  }

                } else {

                  this.presentarAlerta("Error al aceptar Viaje", "Su viaje no ha podido ser reservado.");

                }

              }).catch(error => {

                this.presentarAlerta("Error aqui.", "Funcion Actualizar Estado Viaje.");
                console.error(error);

              })

            } else {

              this.presentarAlerta("Error al reservar Viaje", "Su viaje no ha podido ser reservado.");

            }

          }).catch(error => {

            this.presentarAlerta("Error aqui.", "Funcion Insertar Viaje Aceptado.");
            console.error(error);

          })

        } else {

          this.presentarAlerta("Error al reservar viaje", "El viaje que desea reservar no tiene asientos disponibles.");

        }

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