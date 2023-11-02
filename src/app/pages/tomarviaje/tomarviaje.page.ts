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
      id_vehiculo: '',
      id_conductor: ''
    }
  ]

  constructor(private database: DbserviceService, private alertController: AlertController, private router: Router) { }

  ngOnInit() {
    this.database.buscarViaje();

    this.database.dbState().subscribe(res => {
      if(res){
        this.database.fetchViaje().subscribe(datos => {
          this.arregloViajes = datos;
        })
      } else {
        this.presentarAlerta("No se encuentran viajes", "No hay ningún viaje disponible.")
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


