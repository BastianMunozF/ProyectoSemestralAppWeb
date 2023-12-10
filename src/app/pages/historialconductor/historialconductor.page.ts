import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { AlertController } from '@ionic/angular';
import { Detalle } from 'src/app/services/detalle';
import { Usuario } from 'src/app/services/usuario';
import { Vehiculo } from 'src/app/services/vehiculo';
import { Viaje } from 'src/app/services/viaje';

@Component({
  selector: 'app-historialconductor',
  templateUrl: './historialconductor.page.html',
  styleUrls: ['./historialconductor.page.scss'],
})
export class HistorialconductorPage implements OnInit {

  id_conductor = localStorage.getItem('id');

  // Arreglos
  arregloDetalle: any = [
    {
      id_detalle: '',
      id_usuario: '',
      id_viaje: '',
    }
  ]

  arregloUsuario: any = [
    {
      id_usuario: '',
      nombre: '',
      apellido: '',
      correo: '',
      fechanacimiento: '',
      rut: '',
      celular: '',
      contrasena: '',
      fotoperfil: '',
    }
  ]

  arregloVehiculo: any = [
    {
      id_vehiculo: '',
      marca: '',
      modelo: '',
      anio: '',
      patente: '',
      asientos: '',
      id_usuario: '',
      id_tipo: '',
    }
  ]

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

  constructor(private database: DbserviceService, private alertController: AlertController) { }

  ngOnInit() {
    let id_user = localStorage.getItem('id');
    let estado = 'Finalizado.';

    this.database.buscarViajeIniciado(id_user, estado).then(res => {
      if(res.length > 0){

        this.database.fetchViajeAceptado().subscribe(viaje => {
          if(viaje.length > 0){
            console.log('Viajes del usuario: ', viaje);
            this.arregloViajes = viaje;

            this.database.buscarDetalleViaje(viaje[0].id_viaje).then(detalle => {
              if(detalle.length > 0){
                this.database.fetchDetalleViaje().subscribe(detail => {
                  this.arregloDetalle = detail;

                  this.database.buscarDatosUsuario(detail[0].id_usuario).then(usuario => {
                    if(usuario.length > 0){
                      this.database.fetchUsuarioId().subscribe(user => {
                        if(user.length > 0){

                          this.arregloUsuario = user;

                        }
                      })
                    }
                  })
                })
              }
            })
          }
        })

      } else {

        this.presentarAlerta("Error al cargar viajes", "Usted aún no ha concretado ningún viaje.");

      }

    });

    this.database.buscarVehiculoUsuario(id_user)

    this.database.fetchVehiculoUser().subscribe(vehiculo => {
      this.arregloVehiculo = vehiculo;
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
