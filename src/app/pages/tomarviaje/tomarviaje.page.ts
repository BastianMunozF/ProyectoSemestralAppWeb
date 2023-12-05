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

  aceptarViaje(id_viaje: any, id_conductor: any){

    let id_usuario = localStorage.getItem('id');

    this.database.buscarViajeId(id_viaje).then(viaje => {
        
      if(viaje.length > 0){

        this.arregloViajesId = viaje;

        let asientos = parseInt(this.arregloViajesId.cant_asientos) - 1;

        if(asientos > 0){

          this.database.actualizarEstadoViaje(asientos, id_viaje).then(() => {
            this.database.insertarViajeAceptado(id_usuario, id_conductor, id_viaje).then(res => {
              if(res !== null){
  
                this.presentarAlerta("Viaje Aceptado", "El viaje seleccionado ha sido confirmado con éxito.");
                this.router.navigate(['/menuprincipal']);
  
              } else {
  
                this.presentarAlerta("Error al aceptar viaje", "El viaje no ha podido ser confirmado con éxito.");
  
              }
  
            });
          })

        } else {

          this.presentarAlerta("Error al aceptar viaje", "El viaje que desea reservar ya no tiene asientos disponibles.");

        }
      } else {

        this.presentarAlerta("Viaje no Encontrado", "El viaje que desea reservar no se encuentra disponible.");

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