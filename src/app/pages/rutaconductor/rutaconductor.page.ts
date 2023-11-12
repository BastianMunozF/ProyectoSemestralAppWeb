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

  arregloViajes: any;

  constructor(private router: Router, private alertController: AlertController, private database: DbserviceService) { }

  ngOnInit() {
  }

  buscarViajes(){
    this.database.buscarViaje().then((data) => {
      this.arregloViajes = data;
    }).catch(e => {
      console.log('Error al buscar viajes: ', + e)
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
