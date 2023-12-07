import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-menuprincipalconductor',
  templateUrl: './menuprincipalconductor.page.html',
  styleUrls: ['./menuprincipalconductor.page.scss'],
})
export class MenuprincipalconductorPage implements OnInit {

  arregloViaje: any = [
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

  arregloUsuario: any = [
    {
      id_usuario: '',
      nombre: '',
      apellido: '',
      correo: '',
      clave: '',
      telefono: '',
      direccion: '',
      estado: '',
      id_rol: '',
    }
  ]

  arregloDetalle: any = [
    {
      id_detalle: '',
      id_usuario: '',
      id_viaje: '',
    }
  ]

  constructor(private database: DbserviceService, private alertController: AlertController) { }

  ngOnInit() {
    this.database.buscarDetalle().then(res => {
      if(res !== null){

        console.log('Detalle: ', res);
        this.arregloDetalle = res;

        this.database.buscarViajeId(this.arregloDetalle.id_viaje).then(res => {
          if(res !== null){
              
            console.log('Viaje: ', res);
            this.arregloViaje = res;

            this.database.buscarDatosUsuario(this.arregloDetalle.id_usuario).then(res => {
              if(res !== null){
        
                console.log('Usuario: ', res);
                this.arregloUsuario = res;

                this.database.buscarDetalleUsuario(this.arregloDetalle.id_usuario, this.arregloDetalle.id_viaje).then(res => {
                  if(res !== null){
                    this.presentarAlerta("Viaje Confirmado", "Un pasajero ha reservado su viaje.");
                  } else {
                    console.log('Viaje aun disponible.');
                  }
                })
        
              }
            });
    
          }
        });

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
