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

  arregloViajes: any;

  constructor(private alertController: AlertController, private database: DbserviceService, private router: Router) { }

  ngOnInit() {
    this.database.buscarViaje().then((data) => {
      this.arregloViajes = data;
    });
  }

  aceptarViaje(id_viaje: any){

    let id_usuario = localStorage.getItem('id');

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


