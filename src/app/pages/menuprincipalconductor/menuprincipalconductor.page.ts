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
    this.database.buscarDetalle();

    this.database.fetchDetalle().subscribe(detalle => {
      if(detalle.length > 0){

        this.arregloDetalle = detalle;

        this.database.buscarViajeId(this.arregloDetalle.id_viaje);

        this.database.fetchViajeId().subscribe(viaje => {

          if(viaje.length > 0){

            this.arregloViaje = viaje;

            this.database.buscarDatosUsuario(this.arregloDetalle.id_usuario);

            this.database.fetchUsuarioId().subscribe(usuario => {
                
              if(usuario.length > 0){

                this.arregloUsuario = usuario;

                this.database.buscarDetalleUsuario(this.arregloDetalle.id_usuario, this.arregloDetalle.id_viaje);

                this.database.fetchDetalleViajeUserId().subscribe(detalleuser => {

                  if(detalleuser.length > 0){

                    this.presentarAlerta("Viaje Aceptado", "Un usuario ha aceptado su viaje creado.");

                  }

                })

              } else {

                console.log('Usuario no encontrado.');

              }

            })

          }

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
