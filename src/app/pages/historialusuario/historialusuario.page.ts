import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-historialusuario',
  templateUrl: './historialusuario.page.html',
  styleUrls: ['./historialusuario.page.scss'],
})
export class HistorialusuarioPage implements OnInit {

  arregloHistorial: any = [
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

  arregloDetalle: any = [
    {
      id_detalle: '',
      id_usuario: '',
      id_viaje: '',
      id_conductor: '',
    }
  ]

  constructor(private database: DbserviceService, private alertController: AlertController) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.database.verificarViaje(this.arregloHistorial.id_viaje).then(verificar => {

      if(verificar){

        this.presentarAlerta("Viaje rechazado", "Su viaje ha sido eliminado por el conductor.");

      } else {

        console.log('Viaje aún disponible.');
        this.presentarAlerta("Viaje aceptado!", "Un conductor ha aceptado su viaje!");

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
