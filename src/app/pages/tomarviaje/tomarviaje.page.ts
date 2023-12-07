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

  aceptarViaje(x: any){
    console.log('Viaje: ', x)

    let id_user = localStorage.getItem('id');
    let asientos = x.cant_asientos - 1;

    console.log('Id Usuario: ', id_user);
    console.log('Id Viaje: ', x.id_viaje);
    console.log('Asientos: ', asientos);

    if(asientos > 0){
      this.database.insertarViajeAceptado(id_user, parseInt(x.id_usuario), parseInt(x.id_viaje)).then(res => {
        if(res){
          this.database.actualizarEstadoViaje(asientos, x.id_viaje).then(result => {
            if(result){
              this.presentarAlerta("Viaje Confirmado", "Su viaje ha sido reservado con éxito.");
              this.router.navigate(['/menuprincipal']);
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

  async presentarAlerta(titulo: string, mensaje: string){
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}