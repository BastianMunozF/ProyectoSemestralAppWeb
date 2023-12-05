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

  arregloViajesId: any = [
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
    this.database.buscarViaje();

    this.database.fetchViaje().subscribe(datos => {

      if(datos.length > 0){

        console.log('Viajes: ', datos);
        this.arregloViajes = datos;

      } else {

        console.log('Datos no encontrados.');

      }
    })
  }

  async aceptarViaje(id_viaje: any, id_conductor: any): Promise<void> {
    let id_usuario = localStorage.getItem('id');

    try {
      const viaje = await this.database.buscarViajeId(id_viaje);

      if (viaje.length > 0) {
        this.arregloViajesId = viaje;
        let asientos = parseInt(this.arregloViajesId[0].cant_asientos, 10) - 1;

        if (asientos > 0) {
          const actualizado = await this.database.actualizarEstadoViaje(asientos, id_viaje);

          if (actualizado) {
            const res = await this.database.insertarViajeAceptado(id_usuario, id_conductor, id_viaje);

            if (res !== null) {
              await this.presentarAlerta("Viaje Aceptado", "El viaje seleccionado ha sido confirmado con éxito.");
              this.router.navigate(['/menuprincipal']);
            } else {
              await this.presentarAlerta("Error al aceptar viaje", "El viaje no ha podido ser confirmado con éxito.");
            }
          } else {
            await this.presentarAlerta("Error al aceptar viaje", "El viaje no se ha podido confirmar correctamente");
          }
        } else {
          await this.presentarAlerta("Error al aceptar viaje", "El viaje que desea reservar ya no tiene asientos disponibles.");
        }
      } else {
        await this.presentarAlerta("Viaje no Encontrado", "El viaje que desea reservar no se encuentra disponible.");
      }
    } catch (error) {
      console.error('Error al aceptar el viaje:', error);
    }
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


/*

this.database.insertarViajeAceptado(id_usuario, id_viaje).then(res => {
      if(res !== null){

        let estado = 'Aceptado.';

        this.database.actualizarEstadoViaje(estado, id_usuario).then(actualizado => {
          if(actualizado){
            this.presentarAlerta("Viaje Aceptado", "El viaje seleccionado ha sido confirmado con éxito.");
            this.router.navigate(['/historialconductor'])
          } else {
            this.presentarAlerta("Error al aceptar viaje", "El viaje no se ha podido confirmar correctamente")
          }
        })

      } else {
        this.presentarAlerta("Error al aceptar viaje", "El viaje no se ha podido confirmar correctamente")
      }
    });
*/