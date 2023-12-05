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

  async aceptarViaje(x: any) {
    try {
      let id_user = localStorage.getItem('id');
      let asientos: number = x.cant_asientos - 1;
  
      console.log('ID Usuario:', id_user);
      console.log('Asientos Disponibles:', asientos);
  
      if (asientos > 0) {
        console.log('Intentando insertar viaje aceptado...');
        const res = await this.database.insertarViajeAceptado(id_user, x.id_usuario, x.id_viaje);
  
        if (res !== null) {
          console.log('Viaje aceptado insertado correctamente.');
          console.log('Actualizando estado del viaje...');
          const result = await this.database.actualizarEstadoViaje(asientos, x.id_viaje);
  
          if (result) {
            console.log('Estado del viaje actualizado correctamente.');
            this.presentarAlerta("Viaje Confirmado", "Su viaje ha sido reservado con éxito.");
            this.router.navigate(['/menuprincipal']);
          } else {
            this.presentarAlerta("Error al aceptar Viaje", "Su viaje no ha podido ser reservado.");
          }
        } else {
          this.presentarAlerta("Error al reservar Viaje", "Su viaje no ha podido ser reservado.");
        }
      } else {
        this.presentarAlerta("Error al reservar viaje", "El viaje que desea reservar no tiene asientos disponibles.");
      }
    } catch (error) {
      console.error('Error en la función aceptarViaje:', error);
      this.presentarAlerta("Error", "Ha ocurrido un error al procesar su solicitud.");
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