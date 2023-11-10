import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-rutaconductor',
  templateUrl: './rutaconductor.page.html',
  styleUrls: ['./rutaconductor.page.scss'],
})
export class RutaconductorPage implements OnInit {
  usuarioR: string = "";
  claveR: string = "";
  variableStorage: any = "";

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

  constructor(private router: Router, private alertController: AlertController, private database: DbserviceService) { }

  ngOnInit() {
    this.database.dbState().subscribe(res => {
      if(res){
        this.database.fetchViaje().subscribe(datos => {
          this.arregloViajes = datos;
        })
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
