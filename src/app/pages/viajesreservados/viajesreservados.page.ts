import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-viajesreservados',
  templateUrl: './viajesreservados.page.html',
  styleUrls: ['./viajesreservados.page.scss'],
})
export class ViajesreservadosPage implements OnInit {

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
      id: '',
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
    let estado = 'Disponible.';

    // Buscar todos los detalles del usuario
    this.database.buscarDetalleUser(id_user).then(detalle => {
      if(detalle.length > 0){

        this.database.fetchDetalleUser().subscribe(detail => {
          if(detail.length > 0){
            this.arregloDetalle = detail;

            this.arregloDetalle.forEach((element: any) => {
              this.database.buscarViajeReservado(element.id_viaje, estado).then(viaje => {
                if(viaje.length > 0){
                  this.database.fetchViajeReservado().subscribe(viajes => {
                    if(viajes.length > 0){
                      this.arregloViajes = viajes;
  
                      this.arregloViajes.forEach((viaje: any) => {
                        this.database.buscarDatosUsuario(viaje.id_usuario).then(usuario => {
                          if(usuario.length > 0){
                            this.database.fetchUsuarioId().subscribe(usuarios => {
                              if(usuarios.length > 0){
                                this.arregloUsuario = usuarios;
    
                                this.arregloUsuario.forEach((usuario: any) => {
                                  this.database.buscarVehiculoUsuario(usuario.id_usuario).then(vehiculo => {
                                    if(vehiculo.length > 0){
                                      this.database.fetchVehiculoUser().subscribe(vehiculos => {
                                        if(vehiculos.length > 0){
                                          this.arregloVehiculo = vehiculos;
                                        }
                                      })
                                    }
                                  })
                                })
                              }
                            })
                          }
                        })
                      })
                    }
                  })
                }
              })
            })
      
          }
        })
      }
    })
  }

  cancelarReserva(viaje: any){
    let id_user = localStorage.getItem('id');
    this.database.cancelarReservaUser(id_user, viaje.id_viaje).then(res => {
      if(res){

        this.presentarAlerta("Reserva cancelada", "Su reserva ha sido cancelada.");
        // Elimina el viaje del arreglo
        const index = this.arregloViajes.indexOf(viaje);
        if(index !== -1){
          this.arregloViajes.splice(index, 1);
        }

      } else {

        this.presentarAlerta("Error al cancelar reserva", "No se ha podido cancelar su reserva.");

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
