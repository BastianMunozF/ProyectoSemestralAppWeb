import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-historialusuario',
  templateUrl: './historialusuario.page.html',
  styleUrls: ['./historialusuario.page.scss'],
})
export class HistorialusuarioPage implements OnInit {

  arregloHistorial: any;
  id_usuario = localStorage.getItem('id');

  constructor(private database: DbserviceService, private alertController: AlertController) { }

  ngOnInit() {
    this.database.buscarViajeUser(this.id_usuario).then(res => {
      this.arregloHistorial = res;
    });
  }

  ionViewWillEnter(){
    this.database.verificarViaje(this.arregloHistorial.id_viaje).then(verificar => {
      if(verificar){
        this.presentarAlerta("Viaje rechazado", "Su viaje ha sido rechazado por el conductor.")
      } else {
        console.log('Viaje aún disponible.')
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
